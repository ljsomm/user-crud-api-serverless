import { APIGatewayEvent } from "aws-lambda"
import { userUseCases } from "../../domain/usecases/user"

export const userHandler = {
  index: async (event: APIGatewayEvent, _) => {
    return userUseCases.showUserOrUsers();
  },
  create: async (event: APIGatewayEvent, _) => {
    return userUseCases.createUser(JSON.parse(event.body));
  },
  update: async (event: APIGatewayEvent, _) => {
    return userUseCases.updateUser(JSON.parse(event.body));
  },
  delete: async (event: APIGatewayEvent, _) => {
    return {};
  }
}