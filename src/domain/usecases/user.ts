import { userRepository } from "../../adapters/datasources/repositories/userRepository"
import { IUser } from "../interfaces/user"
import UserInputPort from "../../ports/in/user.in"

export const userUseCases: UserInputPort = {
  showUserOrUsers: async () => {
    return {
      id: "mock",
      name: "mock",
      email: "luasjuan@gmail.com"
    }
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