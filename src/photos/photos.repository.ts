import knex from '@database/index'

class PhotosRepository {
  private tableName = 'photos'

  public async create(data: any) {
    return await knex(this.tableName)
      .insert(data)
  }

  public async findAll() {
    return await knex(this.tableName)
  }

  public async findAllByPet(pet_id: number | string): Promise<any[]> {
    return await knex(this.tableName).where('pet_id', pet_id)
  }
}

export default PhotosRepository