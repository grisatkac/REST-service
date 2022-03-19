import { Schema, Model, model, Document } from "mongoose";

export interface IUser {
    name: string;
    surname: string;
    email: string;
    login: string;
    password: string;
}

export interface IUserDocument extends IUser, Document {
    showName(name: string): string
};

interface IUserModel extends Model<IUser> {
    //showUsers(): any
    showUsers(): string;
}

const userSchema = new Schema<IUserDocument, IUserModel>({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

//userSchema.static.showUsers = function() {}
userSchema.method('showName', function(name: string) {
    return name;
})

userSchema.static('showUsers', function() {
    return ''
})


const User = model<IUserDocument, IUserModel>('User', userSchema);
console.log(User)

export default User