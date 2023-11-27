import cloudinary from 'cloudinary'
import { UploadedFile } from 'express-fileupload'
import PhotosRepository from '../photos.repository'
import { Photo } from '../photos.types'

class CreatePhotoService {
  public async execute({ pet_id }: Photo, files: any) {

    if(!files.image.length) {
      files.image = [files.image]
    }

    const urls = await Promise.all(
      files.image.map(async (file: UploadedFile) => {
        const { secure_url } = await cloudinary.v2.uploader.upload(file.tempFilePath)
        return secure_url
      })
    )

    urls.forEach((url) => {
      const photosRepository = new PhotosRepository() 
      photosRepository.create({
        url,
        pet_id,
      })
    })
  }
}

export default CreatePhotoService