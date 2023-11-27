import { NextFunction, Request, Response } from "express"
import ListUserService from "./services/ListUserService"
import CreateUserService from "./services/CreateUserService"

export class UsersController {
  
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const listUserService = new ListUserService()
      const data = await listUserService.execute()
      return res.json(data)
    } catch(error) {
      next(error)
    }
  }

  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const createUserService = new CreateUserService()
      await createUserService.execute(req.body)
      return res.status(201).send()
    } catch(error) {
      next(error)
    }
  }
}

