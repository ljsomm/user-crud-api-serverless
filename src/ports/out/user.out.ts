import { IUser } from "../../domain/interfaces/user.interface";

export default interface UserOuputPort {
   findOne: (userId: string) => Promise<IUser>
   findAll: () => Promise<IUser[]>;
   saveUser: (user: IUser) => Promise<IUser>;
   updateUser: (user: IUser) => Promise<IUser>;
   deleteUser: (userId: string) => Promise<IUser>;
}