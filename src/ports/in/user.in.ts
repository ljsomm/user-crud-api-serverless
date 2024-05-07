import { IUser } from "../../domain/interfaces/user";

export default interface UserInputPort {
   showAllUsers: () => Promise<IUser[]>;
   showUser: (userId: string) => Promise<IUser>;
   createUser: (user: IUser) => Promise<IUser>;
   updateUser: (user: IUser) => Promise<IUser>;
   deleteUser: (userId: string) => Promise<IUser>;
}