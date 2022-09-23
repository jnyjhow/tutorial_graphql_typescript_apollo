import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"; //1
import { context } from "./context"; 

//https://studio.apollographql.com/sandbox/explorer
import { schema } from "./schema";
export const server = new ApolloServer({
    schema,
    context,
    //1: plugin referente ao graphql playground
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const port = 3000;

server.listen({port}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});