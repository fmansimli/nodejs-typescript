import { Response, Request, NextFunction, Errback } from "express";

export async function get404(req: Request, res: Response, next: NextFunction) {
  res.status(404).json();
}

export async function handleError(
  err: Errback,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).json();
}
