import express from 'express'
import { clerkWebhooks } from '../controllers/USerController.js'

const userRouter=express.Router()

userRouter.post('/webhooks',clerkWebhooks)

export default userRouter;