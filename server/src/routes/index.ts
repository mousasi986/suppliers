import Router, { request } from 'express'
import axios  from 'axios'
import userController from '../controllers/userController'
import {Request, Response} from 'express'


const router = Router()


router.post('/login', userController.login )

router.get('/refresh')


export default router