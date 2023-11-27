import knex from '@database/index'
import { User } from './users.types'

class UsersRepository {
  private tableName = 'users'
  public async findAll() {
    return await knex(this.tableName)
  }

  public async find(key: string, value: any): Promise<User[]> {
    return await knex(this.tableName).where(key, value)
  }

  public async findById(id: number): Promise<User[]> {
    return await knex(this.tableName).where('id', id)
  }

  public async create(data: User) {
    return await knex(this.tableName).insert(data)
  }
}

export default UsersRepository