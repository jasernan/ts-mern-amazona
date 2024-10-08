import express, { Request, Response } from 'express'
import { sampleProducts } from './data'
import cors from 'cors'

const app = express()
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
)
app.get('/api/products', (req: Request, res: Response) => {
  // Define una ruta GET en la dirección '/api/products'.
  res.json(sampleProducts) // Cuando se hace una solicitud GET a esta ruta, el servidor responde con un JSON que contiene los productos de `sampleProducts`.
})
const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
