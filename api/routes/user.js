import express from 'express';
import {userController as UserController} from "../controllers/UserController";


const router = express.Router();


router.get('/users', UserController.get);

export {
  router
}
