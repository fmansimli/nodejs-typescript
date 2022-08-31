import { model, Schema } from "mongoose";
import Password from "../utils/Password";

export interface IUser {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

export default model<IUser>("User", userSchema);
