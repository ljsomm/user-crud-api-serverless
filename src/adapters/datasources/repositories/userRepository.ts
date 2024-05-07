import { DeleteItemCommand, PutItemCommand, QueryCommand, ScanCommand } from "@aws-sdk/client-dynamodb";
import { IUser } from "../../../domain/interfaces/user";
import UserOuputPort from "../../../ports/out/user.out";
import dynamoDBClient from "../clients/dynamodb";
import crypto from "crypto";
import userMapper from "../../mappers/user.mapper";

export const userRepository: UserOuputPort = {
  findAll: async () => {
    const response = await dynamoDBClient.send(new ScanCommand({
      TableName: "tb_user"
    }));
    return response.Items.map(userMapper.fromDynamoRecord);
  },
  findOne: async (userId: string) => {
    const response = await dynamoDBClient.send(new QueryCommand({
      TableName: "tb_user",
      ExpressionAttributeValues: {
        ":id": {
          "S": userId
        }
      },
      KeyConditionExpression: "id = :id", 
    }));
    if(!response.Items?.length) {
      throw new Error(`No items found with id ${userId}`);
    }
    const userResult = response.Items[0];
    return userMapper.fromDynamoRecord(userResult);
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
  deleteUser: async (userId: string) => {
    const response = await dynamoDBClient.send(new DeleteItemCommand({
      Key: {
        id: {
          S: userId
        }
      },
      TableName: "tb_user",
      ReturnValues: "ALL_OLD",
    }));
    return userMapper.fromDynamoRecord(response.Attributes);
  },
}