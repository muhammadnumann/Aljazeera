const AWS = require("aws-sdk");

function getSecrets(params) {
  const secretsmanager = new AWS.SecretsManager();
  return new Promise(function (resolve, reject) {
    secretsmanager.getSecretValue(params, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data.SecretString);
      }
    });
  });
}

function getSecretValueOfKey(secretName, secretObj, key) {
  const value = JSON.parse(secretObj)[key];
  if (value === undefined) {
    console.error(
      "Specified secretsmanager key '" +
        key +
        "'  doesn't exist in secrets manager secret: " +
        secretName
    );
  }

  return value;
}

async function callDependency(functionName, source, functionToCall) {
  const requestTime = new Date();
  try {
    const response = await functionToCall;
    console.log(
      `app=MAM;function=${functionName};result=ok;source=${source};elapsedTime=${
        new Date().getTime() - requestTime.getTime()
      }`
    );
    return response;
  } catch (error) {
    console.error(
      `app=MAM;function=${functionName};result=error;source=${source};elapsedTime=${
        new Date().getTime() - requestTime.getTime()
      }`
    );
    if (error.response) {
      if (error.response.data) {
        console.info(
          `app=MAM;function=${functionName};object=response;data=${JSON.stringify(
            error.response.data,
            null,
            2
          )}`
        );
      }
      throw new CustomError(
        `ERROR_${error.response.status}`,
        error.response.status,
        error.message
      );
    }
    throw error;
  }
}

module.exports = {
  getSecrets,
  getSecretValueOfKey,
  callDependency,
};
