import { RequestHandler } from "express";
import User, { IUser } from "../models/user";

export const login: RequestHandler = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: "fmansimli" });
    res.status(200).json({
      user,
      accessToken: "dfklkdlfk_dfdknfd",
      meta: {
        success: true,
        message: "logged in!",
        url: req.originalUrl,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const register: RequestHandler = async (req, res, next) => {
  const { email, password, username }: IUser = req.body;

  try {
    const user = await User.create({ email, password, username });

    res.status(201).json({
      accessToken: "dfklkdlfk_dfdknfd",
      user,
      meta: {
        success: true,
        message: "registered!",
        url: req.originalUrl,
      },
    });
  } catch (error) {
    next(error);
  }
};
