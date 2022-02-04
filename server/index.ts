import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer, gql } from "apollo-server";
import neo4jDriver from "neo4j-driver";
import "dotenv/config";
const neo4j = neo4jDriver;

const typeDefs = gql`

  type RestaurantApp {
    id: ID!
    restaurants: [Restaurant!] @relationship(type "INCLUDED_IN", direction: IN)
  }


  type Restaurant {
    id: ID!
    name: String!
    menus: [Menu!] @relationship(type "INCLUDED_IN", direction: OUT)
    location: String!
    contact: String!
  }


  type Menu {
    id: ID!
    name: String!
    menuItems: [MenuItem!] @relationship(type: "FEATURED_IN", direction: IN)
  }

  type MenuItem {
    id: ID!
    name: String!
    price: Float!
    description: String!
    featuredInMenu: [Menu!] @relationship(type: "FEATURED_IN", direction: OUT)
    nutritionFacts: NutritionFacts!
  }

  type NutritionFacts {
    id: ID!
    servingSize: String
    servingsPer: String
    amountPer: String
    tableValues: NutritionFactTableValue! @relationship(type: "NUTRITION_FACTS_OF", direction: OUT)
  }

  type NutritionFactTableValue {
    label: String!
    weight: Float!
    unitOfMeasure: String!
    dailyValuePercentage: Float!
    facts: NutritionFacts! @relationship(type: "NUTRITION_FACTS_OF", direction: OUT)
    meta: [String]
  }


`;

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
