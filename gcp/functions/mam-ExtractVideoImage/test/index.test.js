const sinon = require("sinon");
const proxyquire = require("proxyquire").noCallThru();
const assert = require("assert");
const execSync = require("child_process");

const getSample = () => {
  const requestPromise = sinon
    .stub()
    .returns(new Promise((resolve) => resolve("test")));

  return {
    sample: proxyquire("../", {
      "request-promise": requestPromise,
    }),
    mocks: {
      requestPromise: requestPromise,
    },
  };
};

const getMocks = () => {
  const req = {
    headers: {},
    get: function (header) {
      return this.headers[header];
    },
  };
  sinon.spy(req, "get");

  const corsPreflightReq = {
    method: "OPTIONS",
  };

  const corsMainReq = {
    method: "POST",
  };

  return {
    req: req,
    corsPreflightReq: corsPreflightReq,
    corsMainReq: corsMainReq,
    res: {
      set: sinon.stub().returnsThis(),
      send: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
      end: sinon.stub().returnsThis(),
      status: sinon.stub().returnsThis(),
      sendFile: sinon.stub().returnsThis()
    },
  };
};

const stubConsole = function () {
  sinon.stub(console, "error");

  sinon.stub(execSync, 'execSync').yields(null,40);
};

const restoreConsole = function () {
  console.error.restore();
  execSync.execSync.restore();
};

beforeEach(stubConsole);
afterEach(restoreConsole);

describe("functions_extractImageFromVideo", () => {
  it("http:extractImageFromVideo: should handle POST", () => {
    const mocks = getMocks();
    const httpSample = getSample();
    mocks.req.method = "POST";
    mocks.req.headers["content-type"] = "application/json";
    mocks.req.body = {
      time: "00:00:11.1",
      fileName: "test.jpg",
      videoUrl:
        "https://localhost/video.mp4",
    };
    httpSample.sample.extractImageFromVideo(mocks.req, mocks.res);

    assert.strictEqual(mocks.res.sendFile.calledOnce, true);
    assert.notEqual(mocks.res.sendFile.firstCall.args[0], null);
  });
});

describe("functions_extractImageFromVideo", () => {
  it("http:extractImageFromVideo: should return error if not provide all required params", () => {
    const mocks = getMocks();
    const httpSample = getSample();
    mocks.req.method = "POST";
    mocks.req.headers["content-type"] = "application/json";
    httpSample.sample.extractImageFromVideo(mocks.req, mocks.res);

    assert.strictEqual(mocks.res.sendFile.calledOnce, false);
    assert.strictEqual(mocks.res.status.calledOnce, true);
    assert.strictEqual(mocks.res.status.firstCall.args[0], 400);
    assert.strictEqual(mocks.res.send.firstCall.args[0], 'Required fields: time, fileName and videoUrl!');
  });
});

describe("functions_extractImageFromVideo", () => {
  it("http:extractImageFromVideo: should return error if not provide fileName", () => {
    const mocks = getMocks();
    const httpSample = getSample();
    mocks.req.method = "POST";
    mocks.req.headers["content-type"] = "application/json";
    mocks.req.body = {
      time: "00:00:11.1",
      videoUrl:
        "https://localhost/video.mp4",
    };
    httpSample.sample.extractImageFromVideo(mocks.req, mocks.res);

    assert.strictEqual(mocks.res.sendFile.calledOnce, false);
    assert.strictEqual(mocks.res.status.calledOnce, true);
    assert.strictEqual(mocks.res.status.firstCall.args[0], 400);
    assert.strictEqual(mocks.res.send.firstCall.args[0], 'Required fields: time, fileName and videoUrl!');
  });
});

describe("functions_extractImageFromVideo", () => {
  it("http:extractImageFromVideo: should return error if not provide time", () => {
    const mocks = getMocks();
    const httpSample = getSample();
    mocks.req.method = "POST";
    mocks.req.headers["content-type"] = "application/json";
    mocks.req.body = {
      fileName: 'test.jpg',
      videoUrl:
        "https://localhost/video.mp4",
    };
    httpSample.sample.extractImageFromVideo(mocks.req, mocks.res);

    assert.strictEqual(mocks.res.sendFile.calledOnce, false);
    assert.strictEqual(mocks.res.status.calledOnce, true);
    assert.strictEqual(mocks.res.status.firstCall.args[0], 400);
    assert.strictEqual(mocks.res.send.firstCall.args[0], 'Required fields: time, fileName and videoUrl!');
  });
});

describe("functions_extractImageFromVideo", () => {
  it("http:extractImageFromVideo: should return error if not provide videoUrl", () => {
    const mocks = getMocks();
    const httpSample = getSample();
    mocks.req.method = "POST";
    mocks.req.headers["content-type"] = "application/json";
    mocks.req.body = {
      time: "00:00:11.1",
      fileName: 'test.jpg'
    };
    httpSample.sample.extractImageFromVideo(mocks.req, mocks.res);

    assert.strictEqual(mocks.res.sendFile.calledOnce, false);
    assert.strictEqual(mocks.res.status.calledOnce, true);
    assert.strictEqual(mocks.res.status.firstCall.args[0], 400);
    assert.strictEqual(mocks.res.send.firstCall.args[0], 'Required fields: time, fileName and videoUrl!');
  });
});

describe("functions_extractImageFromVideo", () => {
  it("http:extractImageFromVideo: should return error if image format is not supported", () => {
    const mocks = getMocks();
    const httpSample = getSample();
    mocks.req.method = "POST";
    mocks.req.headers["content-type"] = "application/json";
    mocks.req.body = {
      time: "00:00:11.1",
      fileName: 'test.jpg',
      videoUrl:
        "https://localhost/video.mp4",
      format: 'bmp'
    };
    httpSample.sample.extractImageFromVideo(mocks.req, mocks.res);

    assert.strictEqual(mocks.res.sendFile.calledOnce, false);
    assert.strictEqual(mocks.res.status.calledOnce, true);
    assert.strictEqual(mocks.res.status.firstCall.args[0], 400);
    assert.strictEqual(mocks.res.send.firstCall.args[0], 'Cannot export the image with the file format bmp!');
  });
});