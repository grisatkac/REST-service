/*export default interface IUser {
    id: string;
    name: string;
    surname: string;
    login: string;
    password: string;
}

import { Schema, Model, model, Document } from "mongoose";

export interface IUser {
    name: string;
    surname: string;
    email: string;
    login: string;
    password: string;
}

export interface IUserDocument extends IUser, Document {
    showName(): string
};

interface IUserModel extends Model<IUserDocument> {
    showUsers(): any
}

const userSchema = new Schema<IUser>({
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

userSchema.static.showUsers = function() {}

const User = model<IUserDocument, IUserModel>('User', userSchema);
console.log(User)


export default User*/
