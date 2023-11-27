import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export class AuthMiddleware {

  async authenticated(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers
    if(!authorization) return res.status(401).json({ error: 'headers missing authorization'})
    
    const [, token] = authorization.split(' ')
    try {
      jwt.verify(token, process.env.JWT_SECRET as string)
    }
    catch {
      return res.status(401).json({ error: 'token invalid or expired'})
    }
    next()
  }
}