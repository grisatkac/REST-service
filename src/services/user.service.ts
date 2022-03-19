import User, {IUser} from "../models/user.model";

class UserService {
    async CreateUser(data) {
        
        try {
            
            const {name,surname, email,login,password} = data;
        console.log(name,surname, email,login,password)

        const user = new User({name, surname, email, login, password});
        
        await user.save();
        
        return user;
            
        } catch (error) {
            console.log(error.message)
        }


    }

}

export default UserService;