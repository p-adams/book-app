import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer, gql } from "apollo-server";
import neo4jDriver from "neo4j-driver";
import "dotenv/config";
const neo4j = neo4jDriver;

// TODO: update to Book App type defs

const typeDefs = gql``;

const driver = neo4j.driver(
  process.env.DB_ENDPOINT as string,
  neo4j.auth.basic(
    process.env.DB_NAME as string,
    process.env.DB_PASSCODE as string
  )
);

const newSchema = new Neo4jGraphQL({ typeDefs, driver });

const server = new ApolloServer({
  schema: newSchema.schema,
});

server.listen().then(({ url }) => {
  console.log(`Listening on port: ${url}`);
});
