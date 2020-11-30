import { API_URL } from "./apiUrl";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

export default new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launches: offsetLimitPagination(),
        },
      },
    },
  }),
});
