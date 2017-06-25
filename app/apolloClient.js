import {ApolloClient, createNetworkInterface} from 'react-apollo';

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: process.env.GRAPHQL_ENDPOINT,
  }),
});

export default apolloClient;
