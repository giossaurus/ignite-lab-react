import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ombff30igz01xldqsqhd7v/master',
    cache: new InMemoryCache()
})