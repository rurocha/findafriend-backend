import { NextFunction, Request, Response } from "express"
import CreatePhotoService from "./services/CreatePhotoService"
import ListPhotoService from "./services/ListPhotoService"

export class PhotosController {

  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const createPhotoService = new CreatePhotoService()
      await createPhotoService.execute(req.body, req.files)
      return res.status(201).end()
    } catch(error) {
      next(error)
    }
  }

  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const listPhotoService = new ListPhotoService()
      const data = await listPhotoService.execute(req.body)
      return res.json(data)
    } catch(error) {
      console.error(error)
      next(error)
    }
  }
}

export default PhotosController