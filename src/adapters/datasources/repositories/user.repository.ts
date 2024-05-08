import { DeleteItemCommand, GetItemCommand, PutItemCommand, ScanCommand } from "@aws-sdk/client-dynamodb";
import { IUser } from "../../../domain/interfaces/user.interface";
import UserOuputPort from "../../../ports/out/user.out";
import dynamoDBClient from "../clients/dynamodb";
import crypto from "crypto";
import userMapper from "../../mappers/user.mapper";

export const userRepository: UserOuputPort = {
  findAll: async () => {
    const response = await dynamoDBClient.send(new ScanCommand({
      TableName: process.env["TABLE_NAME"] || "tb_user_fallback"
    }));
    return response.Items.map(userMapper.fromDynamoRecord);
  },
  findOne: async (userId: string) => {

    const response = await dynamoDBClient.send(new GetItemCommand({
      TableName: process.env["TABLE_NAME"] || "tb_user_fallback",
      Key: {
        id: {
          "S": userId
        }
      },
    }));
    if(!response.Item) throw new Error(`Item with id ${userId} was not found.`)
    return userMapper.fromDynamoRecord(response.Item);
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
      TableName: process.env["TABLE_NAME"] || "tb_user_fallback"
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
      TableName: process.env["TABLE_NAME"] || "tb_user_fallback"
    }));
    return user;
  },
  deleteUser: async (userId: string) => {
    const response = await dynamoDBClient.send(new DeleteItemCommand({
      Key: {
        id: {
          S: userId
        }
      },
      TableName: process.env["TABLE_NAME"] || "tb_user_fallback",
      ReturnValues: "ALL_OLD",
    }));
    return userMapper.fromDynamoRecord(response.Attributes);
  },
}