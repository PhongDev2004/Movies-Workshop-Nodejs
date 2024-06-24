import { StatusCodes } from "http-status-codes";

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const errorMessage =
    err.message || StatusCodes[StatusCodes.INTERNAL_SERVER_ERROR];
  res.status(statusCode).json({
    name: err.name,
    message: errorMessage,
  });
};

export default errorHandler;
