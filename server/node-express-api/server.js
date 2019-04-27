const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const httpStatus = require('http-status');
const APIError = require('./helpers/apiError');
const responseHandler = require('./helpers/responseHandler');
const routes = require('./routes/index.route');
const app = express();

app.use(logger('dev'));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount all routes on /api path
app.use('/api/v1', routes);

// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
  if (!(err instanceof APIError)) {
    const apiError = new APIError(err.message, err.status, err.isPublic);
    return next(apiError);
  }
  return next(err);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new APIError('API not found', httpStatus.NOT_FOUND);
  return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => // eslint-disable-line no-unused-vars
  res.status(err.status).json(responseHandler.responseError(err))
);


// Server is listening on port {PORT}
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
