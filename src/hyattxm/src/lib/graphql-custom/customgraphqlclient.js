import { ApolloClient, InMemoryCache } from '@apollo/client';

const customgraphqlclient = new ApolloClient({
  uri: 'https://xmc-altudo1-xmcupskilli0bbc-practiceenv1.sitecorecloud.io/sitecore/api/graph/edge/?sc_apikey={41338846-215D-4374-8A76-70E1A45D09CA}',
  cache: new InMemoryCache(),
});

export default customgraphqlclient;
