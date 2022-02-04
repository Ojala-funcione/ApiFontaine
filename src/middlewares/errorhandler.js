
const logErrors = (err, req, res, next) => {
  console.error(err);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
    status: err.status 
  });
};


module.exports = {
  logErrors,
  errorHandler,
};