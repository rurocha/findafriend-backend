import bcrypt from 'bcrypt'
import AppError from "../../errors/AppError"
import UsersRepository from "../users.repository"
import { User, userSchema } from "../users.types"

class CreateUserService {
  public async execute ({
    name,
    address,
    email,
    password,
    whatsapp,
    zip_code
  }: User) {
    const validation = userSchema.safeParse({
      name,
      address,
      email,
      password,
      whatsapp,
      zip_code
    })

    if(!validation.success) throw new AppError('validation error', 400, validation.error)

    const usersRepository = new UsersRepository()
    const users = await usersRepository.find('email', validation.data.email)
    
    if(users.length) throw new AppError('user already exists', 400)

    const password_hash = await bcrypt.hash(validation.data.password, 8)
    return usersRepository.create({
      ...validation.data, 
      password: password_hash
    })
  }
}

export default CreateUserService