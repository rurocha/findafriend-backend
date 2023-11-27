import AppError from "../../errors/AppError"
import PetsRepository from "../pets.repository"
import { Pet, petSchema } from "../pets.types"

class CreatePetService {
  public async execute({
    name, 
    about, 
    energy, 
    size, 
    dependency_level, 
    user_id
  }: Pet) {
    const validation = petSchema.safeParse({
      name, 
      about, 
      energy, 
      size, 
      dependency_level, 
      user_id
    })

    if(!validation.success) throw new AppError('validation error', 400, validation.error)

    const petsRepository = new PetsRepository()
    return petsRepository.create(validation.data)
  }
}

export default CreatePetService