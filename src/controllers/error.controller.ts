import { RequestHandler, ErrorRequestHandler } from "express";

export const get404: RequestHandler = (req, res, next) => {
  res.status(404).send("not found!");
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({
    err,
    meta: {
      url: req.originalUrl,
      success: false,
    },
  });
};
