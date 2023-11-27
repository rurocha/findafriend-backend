import { Router } from "express"
import { UsersController } from "./users.controller"
// import { AuthMiddleware } from "../auth/auth.middleware"

export const usersRoutes = Router()
const usersController = new UsersController()
// const authMiddleware = new AuthMiddleware()


usersRoutes.get('/users', usersController.index)
usersRoutes.post('/users', usersController.store)