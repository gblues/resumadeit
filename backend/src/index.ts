// src/index.js
import express, { Express, Request, Response } from "express";
import {ApolloServer} from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4";
import {typeDefs, resolvers} from "./graphql";
import cors from 'cors';
import dotenv from "dotenv";

interface MyContext {
  token?: string;
}

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

const server = new ApolloServer<MyContext>({typeDefs, resolvers});
await server.start();

app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware(server) );

app.listen(port, () => {
  console.log(`[server]: Graphql Server is running at http://localhost:${port}/graphql`);
});
