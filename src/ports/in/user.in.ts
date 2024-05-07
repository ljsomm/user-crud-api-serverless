import { IUser } from "../../domain/interfaces/user";

export default interface UserInputPort {
   showUserOrUsers: () => Promise<IUser> | Promise<IUser[]>;
   createUser: (user: IUser) => Promise<IUser>;
   updateUser: (user: IUser) => Promise<IUser>;
   deleteUser: (userId: string) => Promise<IUser>;
}