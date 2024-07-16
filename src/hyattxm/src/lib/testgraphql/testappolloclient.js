import { ApolloClient, InMemoryCache } from '@apollo/client';

const appgraphqlClient = new ApolloClient({
  uri: 'https://xmcloudcm.localhost/sitecore/api/graph/edge?sc_apikey={22FB2B85-3683-4D83-BAC5-3B7DC32C1BF4}',
  cache: new InMemoryCache(),
});

export default appgraphqlClient;
