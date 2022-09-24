import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"; //1

//https://studio.apollographql.com/sandbox/explorer
import { schema } from "./schema";
import { context } from "./context"; 

export const server = new ApolloServer({
    schema,
    context,
    introspection: true,
    //1: plugin referente ao graphql playground
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const port = process.env.PORT || 3000; 

server.listen({port}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});