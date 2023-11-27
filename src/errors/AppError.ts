import { ZodError } from "zod"

class AppError {
  public readonly message: string 
  public readonly statusCode: number
  public readonly validations?: ZodError
  
  constructor(message: string, statusCode: number = 400, validations?: ZodError) {
    this.message = message
    this.statusCode = statusCode
    this.validations = validations
  }
}

export default AppError