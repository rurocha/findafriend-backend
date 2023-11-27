import { NextFunction, Request, Response } from "express"
import { PetQuery, PetParams } from "./pets.types"
import CreatePetService from "./services/CreatePetService"
import ListPetService from "./services/ListPetService"
import ShowPetService from "./services/ShowPetService"
import DeletePetService from "./services/DeletePetService"
import CreatePhotoService from "../photos/services/CreatePhotoService"


export class PetsController {

  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const createPetService = new CreatePetService()
      const createPhotoService = new CreatePhotoService()

      const [pet_id] = await createPetService.execute(req.body)
      await createPhotoService.execute({ pet_id }, req.files)

      return res.status(201).end()
    } catch(error) {
      console.log(error)
      next(error)
    }
  }

  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const listPetService = new ListPetService()
      const data = await listPetService.execute(req.query as unknown as PetQuery)
      return res.json(data)
    } catch(error) {
      console.error(error)
      next(error)
    }
  }

  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const showPetService = new ShowPetService()
      const data = await showPetService.execute(req.params as  unknown as PetParams)
      return res.json(data)
    } catch(error) {
      console.error(error)
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const deletePetService = new DeletePetService()
      await deletePetService.execute(req.params as unknown as PetParams)
      return res.status(200).end()
    } catch(error) {
      next(error)
    }
  }
}

