import { Router } from 'express'

const router = Router()
import { userRoutes } from './kol.route.js'

export const setRoutes = () => {
    router.use('/kols', userRoutes())
    return router
}
