import { userUseCases } from "./user.usecase";
import { userRepository } from "../../adapters/datasources/repositories/user.repository";
import { IUser } from "../interfaces/user.interface";

jest.mock("../../adapters/datasources/repositories/user.repository", () => ({
  userRepository: {
    findOne: jest.fn(),
    findAll: jest.fn(),
    saveUser: jest.fn(),
    updateUser: jest.fn(),
    deleteUser: jest.fn()
  }
}));

describe("User Use Cases", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should show a user", async () => {
    const userId = "123";
    await userUseCases.showUser(userId);
    expect(userRepository.findOne).toHaveBeenCalledWith(userId);
  });

  it("should show all users", async () => {
    await userUseCases.showAllUsers();
    expect(userRepository.findAll).toHaveBeenCalled();
  });

  it("should create a user", async () => {
    const user: IUser = { id: "1", name: "Lucas", email: "lucas@gmail.com" };
    await userUseCases.createUser(user);
    expect(userRepository.saveUser).toHaveBeenCalledWith(user);
  });

  it("should update a user", async () => {
    const user: IUser = { id: "1", name: "Lucas", email: "lucas@gmail.com" };
    await userUseCases.updateUser(user);
    expect(userRepository.updateUser).toHaveBeenCalledWith(user);
  });

  it("should delete a user", async () => {
    const userId = "123";
    await userUseCases.deleteUser(userId);
    expect(userRepository.deleteUser).toHaveBeenCalledWith(userId);
  });
});