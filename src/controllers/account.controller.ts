import { RequestHandler } from "express";

export const profile: RequestHandler = (req, res, next) => {
  res.status(200).json({
    profile: {
      username: "fmansimli",
      name: "farid",
    },
    meta: {
      url: req.originalUrl,
      success: true,
    },
  });
};

export const info: RequestHandler = (req, res, next) => {
  res.status(200).json({
    profile: {
      city: "Baku",
      country: "Azerbaijan",
    },
    meta: {
      url: req.originalUrl,
      success: true,
    },
  });
};
