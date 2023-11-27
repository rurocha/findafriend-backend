import { Router } from "express"
import { AuthController } from "./auth.controller"

export const authRoutes = Router()

const authController = new AuthController()


authRoutes.post('/auth', authController.login)