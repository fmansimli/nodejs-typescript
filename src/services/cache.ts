import mongoose from "mongoose";
import Redis from "../redis/client";

const redis = Redis.getClient();
const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function (rootKey: string, key: string) {
  this.useCache = true;
  this.rooKey = rootKey;
  this.key = key;
  return this;
};

mongoose.Query.prototype.exec = async function (...rest: []) {
  if (!this.useCache) {
    console.log("queryy");

    return exec.apply(this, rest);
  }

  redis
    .hGet(this.rootKey, this.key)
    .then(data => {
      if (data) {
        const doc = JSON.parse(data);
        return Array.isArray(doc)
          ? doc.map(d => new this.model(d))
          : new this.model(doc);
      }
    })
    .catch(err => {
      console.log("from cache=>>", err);
    });

  const result = await exec.apply(this, rest);
  redis.set("ggg", JSON.stringify(result));
  return result;
};
