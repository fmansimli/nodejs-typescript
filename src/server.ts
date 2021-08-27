import express from "express";
import http from "http";
import helmet from "helmet";
import compression from "compression";
import { join } from "path";
import dotenv from "dotenv";

// import routes , controllers and middlewares
import tokenVerify from "./middlewares/tokenVerify";

import { get404, handleError } from "./controllers/errors";
import auth from "./routes/auth";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));

app.use(helmet());
app.use(compression());

app.use("/auth", auth);
app.use("/api", tokenVerify);

app.use(get404);
app.use(handleError);

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`@@@@@  server is running on http://localhost:${PORT} ..`);
});
