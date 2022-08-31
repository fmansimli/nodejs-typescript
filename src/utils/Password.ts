import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

class Password {
  static async toHash(password: string): Promise<string> {
    const salt = randomBytes(8).toString("hex");
    const buff = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${buff.toString("hex")}.${salt}`;
  }

  static async compare(stored: string, plain: string): Promise<boolean> {
    const [hashed, salt] = stored.split(".");
    const buff = (await scryptAsync(plain, salt, 64)) as Buffer;

    return buff.toString("hex") === hashed;
  }
}

export default Password;
