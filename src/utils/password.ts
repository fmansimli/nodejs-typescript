import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

class Password {
  static async toHash(password: string, level = 32): Promise<string> {
    const salt = randomBytes(8).toString("hex");
    const buff = (await scryptAsync(password, salt, level)) as Buffer;
    return `${buff.toString("hex")}.${salt}.${level}`;
  }

  static async compare(stored: string, plain: string): Promise<boolean> {
    const [hashed, salt, level] = stored.split(".");
    const buff = (await scryptAsync(plain, salt, +level)) as Buffer;

    return buff.toString("hex") === hashed;
  }
}

export default Password;
