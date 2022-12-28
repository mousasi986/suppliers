import Router, { request } from 'express'
import axios  from 'axios'
import userController from '../controllers/userController'
import {Request, Response} from 'express'
import {body} from "express-validator"
import authMiddleware from '../middleware/authMiddleware'
import applicationController from '../controllers/applicationController'

const router = Router()


router.post('/login',body('phone').isMobilePhone('ru-RU'),body('password').isLength({min:5,max:5}),userController.login )
router.post('/logout',userController.logout)

router.get('/refresh',userController.refresh)
router.post('/createApplication',applicationController.createAplication,authMiddleware)
router.post('/createApplicationItem', applicationController.createApplicationItem,authMiddleware)
router.post('/getApplications',applicationController.getApplications,authMiddleware)
router.post('/getApplicationItems',applicationController.getApplicationItems,authMiddleware)
router.post('/getUsers',userController.getUsers,authMiddleware)
router.post('/setUserRole',userController.setUserRole,authMiddleware)
router.post('/getApplicationsCategoryManager',applicationController.getApplicationsCategoryManager,authMiddleware)


export default router