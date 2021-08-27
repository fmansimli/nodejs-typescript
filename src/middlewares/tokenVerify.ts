import { verify } from "jsonwebtoken";
import { Response, NextFunction } from "express";

async function tokenVerify(req: any, res: Response, next: NextFunction) {
  try {
    const token = req.headers.auth || req.cookies.authtoken;
    if (token) {
      const decoded = await verify(token, process.env.JWT_SECRET as string);
      req.user = decoded;
      req.token = token;
      return next();
    }

    throw new Error("no token provided..");
  } catch (error) {
    res.status(401).json();
  }
}

export default tokenVerify;
