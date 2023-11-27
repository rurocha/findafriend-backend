import UsersRepository from "../users.repository"
import { User } from "../users.types"

type UserWithOptionalPassword = Omit<User, 'password'> & { password?: string };

class ListUserService {
  public async execute () {
    const usersRepository = new UsersRepository()
    const users: UserWithOptionalPassword[] = await usersRepository.findAll()

    const usersWithoutPassword = users.map(user => {
      delete user.password
      return user
    })

    return usersWithoutPassword
  }
}

export default ListUserService