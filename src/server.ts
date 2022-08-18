import http from "http";

import app from "./app";
import { connectDb } from "./db/db";

import { initializeAppConfig } from "./config/config";

initializeAppConfig();

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  try {
    connectDb();
    console.log("@@@@ monfodb connected!");
  } catch (error: any) {
    console.log(`$$$ db connection error! (${error.messsage})`);
  } finally {
    console.log(`@@@@ server is running on http://localhost:${PORT} ...`);
  }
});
