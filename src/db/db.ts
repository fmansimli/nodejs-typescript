import { connect } from "mongoose";

export const connectDb = async () => {
  connect(process.env.MONGO_URL as string, {
    autoCreate: false,
    autoIndex: false,
    minPoolSize: 5,
  });
};
