import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { IUser } from "../../../domain/interfaces/user";
import UserOuputPort from "../../../ports/out/user.out";
import dynamoDBClient from "../clients/dynamodb";
import crypto from "crypto";

export const userRepository: UserOuputPort = {
  retrieveUserOrUsers: async () => {
    return null;
  },
  saveUser: async (user: IUser) => {
    user.id = crypto.randomUUID()
    await dynamoDBClient.send(new PutItemCommand({
      Item: {
        id: {
          S: user.id
        },
        name: {
          S: user.name
        },
        email: {
          S: user.email
        }
      },
      TableName: "tb_user"
    }));
    return user;
  },
  updateUser: async (user: IUser) => {
    await dynamoDBClient.send(new PutItemCommand({
      Item: {
        id: {
          S: user.id
        },
        name: {
          S: user.name
        },
        email: {
          S: user.email
        }
      },
      TableName: "tb_user"
    }));
    return user;
  },
  deleteUser: async (userId: number) => {
    return null;
  },
}