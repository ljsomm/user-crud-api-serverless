import { APIGatewayEvent } from "aws-lambda"
import UserPort from "../../ports/in/user.in"

export const userHandler: UserPort = {
  index: async (event: APIGatewayEvent, _) => {
    return {
      id: "mock",
      name: "mock",
      email: "luasjuan@gmail.com"
    }
  },
  create: async (event: APIGatewayEvent, _) => {
    return {
      id: "mock",
      name: "mock",
      email: "luasjuan@gmail.com"
    }
  },
  update: async (event: APIGatewayEvent, _) => {
    return {
      id: "mock",
      name: "mock",
      email: "luasjuan@gmail.com"
    }
  },
  delete: async (event: APIGatewayEvent, _) => {
    return {
      id: "mock",
      name: "mock",
      email: "luasjuan@gmail.com"
    }
  }
}