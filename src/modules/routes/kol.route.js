import { Router } from 'express'
import { getAllKols, getRandomKol, getRandomTweet } from '../controllers/kol.controller.js'

const router = Router()

export const userRoutes = () => {
    router.get('/', getAllKols)
    router.get('/random', getRandomKol)
    router.get('/tweet', getRandomTweet)

    return router
}
