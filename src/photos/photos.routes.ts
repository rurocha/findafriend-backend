import { Router } from "express"
import { PhotosController } from "./photos.controller"

export const photosRoutes = Router()

const photosController = new PhotosController()

photosRoutes.post('/photos', photosController.store)
photosRoutes.get('/photos', photosController.index)
// petsRoutes.get('/pets/:id', petsController.show)
// petsRoutes.delete('/pets/:id', petsController.delete)