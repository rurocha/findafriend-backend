import 'module-alias/register'
import express, { Response, Request, NextFunction } from 'express'
import cors from 'cors'
import 'dotenv/config'
import { authRoutes } from './src/auth/auth.routes'
import { usersRoutes } from './src/users/users.routes'
import { petsRoutes } from './src/pets/pets.routes'
import { photosRoutes } from './src/photos/photos.routes'
import AppError from './src/errors/AppError'
import './config/photos/index'
import fileUpload from 'express-fileupload'

const app = express()
const port = 4000

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}))
app.use(express.json())
app.use(cors())


app.use(usersRoutes)
app.use(authRoutes)
app.use(petsRoutes)
app.use(photosRoutes)

app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
  if(err instanceof AppError) {
    res.status(err.statusCode).json({ error: err.message, validations: err.validations })
  }
  next()
})

app.listen(port, () => {
  return console.log(`app is running on http://localhost:${port}`)
})