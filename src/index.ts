import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"; //1

import { schema } from "./schema";
export const server = new ApolloServer({
    schema,
    //1: plugin referente ao graphql playground
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const port = 3000;

server.listen({port}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});