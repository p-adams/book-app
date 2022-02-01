import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer, gql } from "apollo-server";
import neo4jDriver from "neo4j-driver";
const neo4j = neo4jDriver;

const typeDefs = gql`
  type Menu {
    name: String!
    menuItems: [MenuItem!] @relationship(type: "FEATURED_IN", direction: IN)
  }

  type MenuItem {
    name: String!
    featuredInMenu: [Menu!] @relationship(type: "FEATURED_IN", direction: OUT)
  }
`;

const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "password")
);

const newSchema = new Neo4jGraphQL({ typeDefs, driver });

const server = new ApolloServer({
  schema: newSchema.schema,
});

server.listen().then(({ url }) => {
  console.log(`Listening on port: ${url}`);
});
