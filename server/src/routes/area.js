import express from 'express'
import * as controller from '../controllers/area'


const router = express.Router()

router.get('/all', controller.getAreas)

export default router