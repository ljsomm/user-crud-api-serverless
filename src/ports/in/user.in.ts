import { APIGatewayEvent } from "aws-lambda";
import { IUser } from "../../interfaces/user";

export default interface UserPort {
   index: (event: APIGatewayEvent, _) => Promise<IUser> | Promise<IUser[]>;
   create: (event: APIGatewayEvent, _) => Promise<IUser>;
   update: (event: APIGatewayEvent, _) => Promise<IUser>;
   delete: (event: APIGatewayEvent, _) => Promise<IUser>;
}