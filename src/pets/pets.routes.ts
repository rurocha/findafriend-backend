import { Router } from "express"
import { PetsController } from "./pets.controller"

export const petsRoutes = Router()

const petsController = new PetsController()

petsRoutes.post('/pets', petsController.store)
petsRoutes.get('/pets', petsController.index)
petsRoutes.get('/pets/:id', petsController.show)
petsRoutes.delete('/pets/:id', petsController.delete)