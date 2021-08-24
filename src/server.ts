import express, { Response, Request, NextFunction } from "express";
import http from "http";

// import routes and controllers
import authRouter from "./routes/auth";
import { get404, handleError } from "./controllers/errors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "everything is ok.." });
});

app.use(get404);
app.use(handleError);

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`@@@@@  server is running on http://localhost:${PORT} ..`);
});
