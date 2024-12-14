// utils/tokenUtils.ts
import jwt from "jsonwebtoken";
 

export const generateToken = (id: number): string => {
  const secret = process.env.JWT_SECRET || "default_secret";
  return jwt.sign({ id }, secret, { expiresIn: "1h" });
};
