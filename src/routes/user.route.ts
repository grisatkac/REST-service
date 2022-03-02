import { Router } from "express";
import UserController from "src/controllers/user.controller";

const router = Router();
const userController = new UserController();

router
    .get('/', userController.getUsers)

export { router };