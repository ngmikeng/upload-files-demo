
module.exports = {
  responseSuccess: responseSuccess,
  responseError: responseError
};

function responseSuccess(data = null, opts = {}) { // eslint-disable-line no-unused-vars
  return {
    data: data,
    error: null,
    success: 1,
  };
}

function responseError(error = {}, opts = {}) { // eslint-disable-line no-unused-vars
  return {
    data: null,
    error: {
      status: error.status,
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : {}
    },
    success: 0,
  };
}
