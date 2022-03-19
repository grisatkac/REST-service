import {Request, Response} from "express";
import UserService from "../services/user.service";


//import IUser from "src/interfaces/user";
//import {IUser } from "../models/user.model";
//import User from "../models/user.model"

//const user: IUser = new User({name: 'pistapool', surname: "pistapool", login: 'pistapool', password: 'pistapool', email: 'pitapool'})
//user.save()

const userService = new UserService();

class UserController {
    async getUsers(req: Request, res: Response) {
        const user = await userService.CreateUser(req.body);
        res.status(200).json({message: 'User was created'})
    };

    async createUser(req: Request, res: Response) {
        console.log(req.body)
        const user = await userService.CreateUser(req.body);
        res.status(200).json({message: 'User was created', user})

    };
};

export default UserController;
