import AppError from "../../errors/AppError"
import PetsRepository from "../pets.repository"
import { PetParams, petParamsSchema } from "../pets.types"

class ShowPetService {

  public async execute({ id }: PetParams) {
    const validation = petParamsSchema.safeParse({ id })

    if(!validation.success) throw new AppError('validation error', 400, validation.error)

    const petsRepository = new PetsRepository()
    const data = await petsRepository.findById(id)
    return data
  }
}

export default ShowPetService