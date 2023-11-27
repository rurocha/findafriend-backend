import PetsRepository from "../pets.repository"
import { PetQuery } from "../pets.types"

class ListPetService {
  public async execute({ user_id }: PetQuery) {
    const petsRepository = new PetsRepository()

    if(!user_id) {
      const data = await petsRepository.findAll()
      return data
    }

    const data = await petsRepository.findAllByUser(user_id)
    return data
  }
}

export default ListPetService