import userMapper from "./user.mapper";
import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { IUser } from "../../domain/interfaces/user.interface";

describe("User Mapper", () => {
  it("should convert DynamoDB record to plain JSON", () => {
    const dynamoRecord: Record<string, AttributeValue> = {
      "id": { S: "1" },
      "name": { S: "Lucas" },
      "email": { S: "lucas@gmail.com" }
    };
    const expectedUser: IUser = {
      id: "1",
      name: "Lucas",
      email: "lucas@gmail.com"
    };
    const result = userMapper.fromDynamoRecord(dynamoRecord);
    expect(result).toEqual(expectedUser);
  });
});
