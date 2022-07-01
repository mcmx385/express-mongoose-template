import mongoose from "mongoose";
const { Schema, model } = mongoose;

const strOpt = { type: String, required: true };
const numOpt = { type: Number, required: true, default: 0 };
const dateOpt = { type: Date, default: Date.now, required: true };
const objOpt = { type: Object, required: true };

const UsersSchema = new Schema(
  {
    username: strOpt,
    password: strOpt,
  },
  { timestamps: true, collection: "users" }
);

export default model("Users", UsersSchema);
