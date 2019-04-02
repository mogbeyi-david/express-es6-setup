import express from 'express';
import {userController as UserController} from "../controllers/UserController";


const router = express.Router();


router.post('/store', UserController.store);
router.get('', UserController.get);


export {
  router
}
