import mongoose, { model, Schema } from "mongoose";
import Password from "../utils/password";

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
    strict: true,
  },
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

userSchema.pre("remove", function (next) {
  mongoose
    .model("post")
    .deleteMany({ user: this.get("_id") })
    .then(() => next())
    .catch(err => err);
});

export default model<IUser>("User", userSchema);
