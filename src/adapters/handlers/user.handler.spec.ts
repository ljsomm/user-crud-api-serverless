import { userHandler } from "./user.handler";
import { userUseCases } from "../../domain/usecases/user.usecase";

jest.mock("../../domain/usecases/user.usecase", () => ({
  userUseCases: {
    showUser: jest.fn(),
    showAllUsers: jest.fn(),
    createUser: jest.fn(),
    updateUser: jest.fn(),
    deleteUser: jest.fn()
  }
}));

describe("User Handler", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call showUser when index method is called with id in queryStringParameters", async () => {
    const mockEvent = {
      queryStringParameters: { id: "1" }
    };

    await userHandler.index(mockEvent as any, null);

    expect(userUseCases.showUser).toHaveBeenCalledWith("1");
  });

  it("should call showAllUsers when index method is called without id in queryStringParameters", async () => {
    const mockEvent = {};

    await userHandler.index(mockEvent as any, null);

    expect(userUseCases.showAllUsers).toHaveBeenCalled();
  });

  it("should call createUser with parsed body when create method is called", async () => {
    const mockEvent = {
      body: JSON.stringify({ name: "Lucas", email: "lucas@gmail.com" })
    };

    await userHandler.create(mockEvent as any, null);

    expect(userUseCases.createUser).toHaveBeenCalledWith({ name: "Lucas", email: "lucas@gmail.com" });
  });

  it("should call updateUser with parsed body when update method is called", async () => {
    const mockEvent = {
      body: JSON.stringify({ id: "1", name: "Lucas", email: "lucas@gmail.com" })
    };

    await userHandler.update(mockEvent as any, null);

    expect(userUseCases.updateUser).toHaveBeenCalledWith({ id: "1", name: "Lucas", email: "lucas@gmail.com" });
  });

  it("should call deleteUser with id from queryStringParameters when delete method is called", async () => {
    const mockEvent = {
      queryStringParameters: { id: "1" }
    };

    await userHandler.delete(mockEvent as any, null);

    expect(userUseCases.deleteUser).toHaveBeenCalledWith("1");
  });
});
