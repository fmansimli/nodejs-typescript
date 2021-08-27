import { Response, Request } from "express";

export async function get404(req: Request, res: Response) {
  res.status(404).json();
}

export async function handleError(err: any, req: Request, res: Response) {
  res.status(500).json();
}
