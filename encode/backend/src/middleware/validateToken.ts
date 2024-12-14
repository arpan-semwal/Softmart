import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticatedRequest } from '../types/AuthenticatedRequest';
export const validateToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.split(' ')[1]; // Assuming token is sent as "Bearer token"

  if (!token) {
    res.status(401).json({ message: 'Access denied, no token provided' });
    return;
  }

  try {
    const secret = process.env.JWT_SECRET || 'default_secret';
    const decoded = jwt.verify(token, secret) as { id: number }; // Decoding the token

    (req as AuthenticatedRequest).user = { id: decoded.id }; // Casting to AuthenticatedRequest
    next(); // Proceeding to the next middleware or route handler
  } catch (error) {
    console.error('Invalid token', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};
