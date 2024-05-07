import { IUser } from "../../domain/interfaces/user";

export default interface UserOuputPort {
   retrieveUserOrUsers: () => Promise<IUser> | Promise<IUser[]>;
   saveUser: (user: IUser) => Promise<IUser>;
   updateUser: (user: IUser) => Promise<IUser>;
   deleteUser: (userId: number) => Promise<IUser>;
}