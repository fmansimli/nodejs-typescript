import { connect } from "mongoose";

class MyDatabase {
  static async connect() {
    connect(process.env.MONGO_URL as string, {
      autoCreate: false,
      autoIndex: false,
      minPoolSize: 5,
    });
  }
}

export default MyDatabase;
