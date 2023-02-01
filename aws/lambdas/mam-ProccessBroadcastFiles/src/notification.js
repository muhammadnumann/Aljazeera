const aws = require("aws-sdk");
const {
  getSecrets,
  getSecretValueOfKey,
  callDependency,
} = require("/opt/nodejs/utils");

const ENVIRONMENT = process.env.environment || "dev";

const notify = async (event, context) => {
  const secretId = `mam/${ENVIRONMENT}`;
  const secrets = await callDependency(
    context.functionName,
    "secretsmanager",
    getSecrets({
      SecretId: secretId,
    })
  );

  const userList = await getSecretValueOfKey(
    secretId,
    secrets,
    "adminUserList"
  );

  const sts = new aws.STS({ region: "eu-west-1" });
  const stsParams = {
    RoleArn: `arn:aws:iam::250144837585:role/contentworkflows-services-${ENVIRONMENT}`,
    DurationSeconds: 3600,
    RoleSessionName: "SEND_ALERT_MESSAGE",
  };
  const stsResults = await sts.assumeRole(stsParams).promise();

  const lambda = new aws.Lambda({
    region: "eu-west-1",
    accessKeyId: stsResults.Credentials.AccessKeyId,
    secretAccessKey: stsResults.Credentials.SecretAccessKey,
    sessionToken: stsResults.Credentials.SessionToken,
  });

  const message = `File from broadcast with error: \n Filename: ${event.s3.object.key} \n File Size: ${event.s3.object.size} \n Event Time: ${event.eventTime}`;

  for (const user of userList) {
    const result = await lambda
      .invoke({
        FunctionName:
          "arn:aws:lambda:eu-west-1:250144837585:function:contentworkflows-SendMessageToUser-dev",
        InvocationType: "RequestResponse",
        Payload:
          '{"userAttribute": "email",' +
          `   "value": "${user}",` +
          `   "message": "${message}"}`,
      })
      .promise();
  }
};

module.exports = {
  notify,
};
