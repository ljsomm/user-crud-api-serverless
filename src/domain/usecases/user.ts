import { userRepository } from "../../adapters/datasources/repositories/userRepository"
import { IUser } from "../interfaces/user"
import UserInputPort from "../../ports/in/user.in"

export const userUseCases: UserInputPort = {
  showUser: async (userId: string) => {
    return userRepository.findOne(userId);
  },
  showAllUsers: async () => {
    return userRepository.findAll();
  },
  createUser: async (user: IUser) => {
    return userRepository.saveUser(user);
  },
  updateUser: async (user: IUser) => {
    return userRepository.updateUser(user);
  },
  deleteUser: async (userId: string) => {
    return userRepository.deleteUser(userId);
  }
}