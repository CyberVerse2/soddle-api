import { Router } from 'express'
import { getAllKols, getRandomKol } from '../controllers/kol.controller.js'

const router = Router()

export const userRoutes = () => {
    router.get('/', getAllKols)
    router.get('/random', getRandomKol
    )

    return router
}
