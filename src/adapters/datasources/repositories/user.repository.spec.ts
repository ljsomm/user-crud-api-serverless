import crypto from 'crypto';
import { userRepository } from "./user.repository"
import { IUser } from '../../../domain/interfaces/user.interface';

jest.mock('../clients/dynamodb', () => {
  return {
    __esModule: true,
    default: {send: jest.fn((command) => Promise.resolve({
      Items: [{ id: { S: crypto.randomUUID() }, name: { S: "Lucas"}, email: {S: "lucas@gmail.com"} }],
      Item: [{ id: { S: "123" }, name: { S: "Lucas"}, email: {S: "lucas@gmail.com"} }].find(item => {
        if(!!command.input.Key?.id) return command.input.Key.id.S == item.id.S;
      } ),
      Attributes: { id: { S: crypto.randomUUID() }, name: { S: "Lucas"}, email: {S: "lucas@gmail.com"} },
    }))}
  }
})

describe('UserRepostiroy', () => {

  it('should find all users in database and retrieve it', async () => {
    const response = await userRepository.findAll();
    expect(response.length).toBeGreaterThan(0);
  });

  it('should find a user based on id in database and retrieve it', async () => {
    const response = await userRepository.findOne("123");
    expect(response.name).toBe("Lucas");
    expect(response.email).toBe("lucas@gmail.com");
  });

  it('should store user in database and retrieve it', async () => {
    const user: IUser = {
      name: "lucas",
      email: "lucas@gmail.com"
    };
    const response = await userRepository.saveUser(user);
    expect(response.name).toBe(user.name);
    expect(response.email).toBe(user.email);
  });

  it('should update user in database and retrieve it', async () => {
    const user: IUser = {
      id: crypto.randomUUID(),
      name: "lucas",
      email: "lucas@gmail.com"
    };
    const response = await userRepository.updateUser(user);
    expect(response).toBe(user)
  });

  it('should delete user by id and retrieve it', async () => {
    const response = await userRepository.deleteUser(crypto.randomUUID());
    expect(response.name).toBe("Lucas");
    expect(response.email).toBe("lucas@gmail.com");
  });

})