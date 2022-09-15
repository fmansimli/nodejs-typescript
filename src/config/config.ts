import dotenv from "dotenv";
//import "../services/cache";

class AppConfig {
  static initialize() {
    dotenv.config();
  }
}

export default AppConfig;
