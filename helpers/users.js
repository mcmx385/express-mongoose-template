import mongoose from "mongoose";
import { MongoURL, MongooseSetting } from "../config.js";
import Users from "../models/users.model.js";

export async function getUser(obj) {
  try {
    await mongoose.connect(MongoURL, MongooseSetting);
    let result = await Users.find(obj);
    return result;
  } catch (e) {
    throw e;
  } finally {
    await mongoose.connection.close();
  }
}

export async function createUser(obj) {
  try {
    await mongoose.connect(MongoURL, MongooseSetting);
    let result = await Users.findOneAndUpdate({ username: obj.username }, obj, { upsert: true, new: true });
    return result;
  } catch (e) {
    throw e;
  } finally {
    await mongoose.connection.close();
  }
}
