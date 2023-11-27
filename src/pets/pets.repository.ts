import knex from '@database/index'
import { Pet } from "./pets.types"

class PetsRepository {
  private tableName = 'pets'

  public async create(data: Pet) {
    return await knex(this.tableName)
      .insert(data)
  }
  
  public async findAll() {
    return knex(this.tableName)
    .select(
      'pets.*',
      knex.raw('JSON_ARRAYAGG(JSON_OBJECT("url", photos.url)) as photos')
    )
    .leftJoin('photos','pets.id','photos.pet_id')
    .groupBy('pets.id')
  }

  public async findAllByUser(userId: number): Promise<Pet[]> {
    return knex(this.tableName)
    .select(
      'pets.*',
      knex.raw('JSON_ARRAYAGG(photos.url) as photos')
    )
    .leftJoin('photos','pets.id','photos.pet_id')
    .groupBy('pets.id')
    .where('user_id', userId)
  }

  public async findById(id: number | string): Promise<Pet> {
    const data = await knex(this.tableName)
      .select(
        'pets.*',
        knex.raw('JSON_ARRAYAGG(photos.url) as photos')
      )
      .leftJoin('photos','pets.id','photos.pet_id')
      .groupBy('pets.id')
      .where('pets.id', id)
      .first()

    return data
  }

  public async deleteById(id: number | string) {
    const data = await knex(this.tableName)
      .where('id', id)
      .delete()

    return data
  }

}

export default PetsRepository