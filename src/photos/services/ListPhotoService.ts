
import PhotosRepository from "../photos.repository"

class ListPhotoService {
  public async execute({ pet_id }: any) {
    const photosRepository = new PhotosRepository()

    if(!pet_id) {
      const data = await photosRepository.findAll()
      return data
    }

    const data = await photosRepository.findAllByPet(pet_id)
    return data
  }
}

export default ListPhotoService