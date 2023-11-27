import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import knex from '@database/index'
import { loginSchema } from "./auth.types"
import { User } from "src/users/users.types"

export class AuthController {

  async login(req: Request, res: Response) {
    const validation = loginSchema.safeParse(req.body)
    if(!validation.success) return res.status(400).send(validation.error)

    const { email } = validation.data
    const user: User = await knex('users').where('email', email).first()

    if(!user) return res.status(401).json({ error: 'email or password is invalid'})

    const isCorrectPassword = await bcrypt.compare(validation.data.password, user.password) 
    if(!isCorrectPassword ) return res.status(401).json({ error: 'email or password is invalid'})

    const token = jwt.sign({ id: user.email }, process.env.JWT_SECRET as string, { expiresIn: 1 })
    return res.json({ ...user, token })
  }
}

