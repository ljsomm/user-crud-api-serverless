import { AttributeValue } from "@aws-sdk/client-dynamodb";
import { IUser } from "../../domain/interfaces/user.interface";

const userMapper = {
  fromDynamoRecord: (dynamoRecord: Record<string, AttributeValue>) => {
    return Object.keys(dynamoRecord).reduce((accumulator, key) => {
      return {
        ...accumulator,
        [key]: Object.values(dynamoRecord[key])[0]
      }
    }, {}) as IUser;
  }
};

export default userMapper;