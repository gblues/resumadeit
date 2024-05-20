import { readFileSync} from "fs";
import {buildSchema} from "graphql";

export const typeDefs = buildSchema(readFileSync("../graphql/schema.graphqls", "utf-8"));
export const resolvers = {
    Query: {
        hello: () => "Hello world!",
    }
};