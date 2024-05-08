import { APIGatewayEvent } from "aws-lambda"
import { userUseCases } from "../../domain/usecases/user.usecase"
import "../../config/environment";

export const userHandler = {
  index: async (event: APIGatewayEvent, _) => {
    if(!!event.queryStringParameters?.id) {
      return userUseCases.showUser(event.queryStringParameters?.id);
    }
    return userUseCases.showAllUsers();
  },
  create: async (event: APIGatewayEvent, _) => {
    return userUseCases.createUser(JSON.parse(event.body));
  },
  update: async (event: APIGatewayEvent, _) => {
    return userUseCases.updateUser(JSON.parse(event.body));
  },
  delete: async (event: APIGatewayEvent, _) => {
    return userUseCases.deleteUser(event.queryStringParameters?.id);
  }
}