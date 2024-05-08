# Serverless Framework Node HTTP API on AWS

A Serverless User CRUD project =).

## Goal 🎯

### Architecture

Create a serverless user's CRUD. Hexagonal architecture was chosen to organize the code. The idea is to have a loosely coupled and a simple way to organize the responsibilities of some pieces of the code.

![image](https://github.com/ljsomm/user-crud-api-serverless/assets/48564798/6342066d-810e-4671-a84d-e8b99a8a5ead)


### Git strategies

It was used Git Workflows and actions to provide speed on the Continuous Integration and Continuous Delivery/Deployment (you can check them in the "actions" sections if you want). Furtheremore, it was used a kind of gitflow approach to provide stage segregation-driven environment (dev and production), but only following 3 kind of branches: features, develop and master.


## Tech Stack 🚀

- NodeJS
- Typescript
- DynamoDB
- Jest
- Serverless Framework
- Github Workflows
- Docker
- LocaStack
- AWS

