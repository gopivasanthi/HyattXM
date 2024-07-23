import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import customgraphqlclient from 'lib/graphql-custom/customgraphqlclient';
import React from 'react';
import TestFilterItem from 'src/atoms/Product/TestAtoms/TestFilterItem';

const PRODUCTS_FILTERS = gql`
  query GetProductFilters {
    searchProductType: search(
      where: {
        AND: [
          { name: "_templates", value: "{9E3271F8-7BA8-43D8-8AA8-A250A6AF7B28}", operator: EQ }
          { name: "_path", value: "{62698DB7-FCD3-4100-BC09-8F658470A70A}", operator: NEQ }
        ]
      }
    ) {
      results {
        ... on ProductType {
          insuranceTypeName {
            value
          }
        }
      }
    }
  }
`;
export const TestProductTypeFilters = (): JSX.Element => {
  const { loading, error, data } = useQuery(PRODUCTS_FILTERS, {
    client: customgraphqlclient,
  });
  if (loading) return <p>Loading data....</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Not data found!</p>;
  const { results } = data.searchProductType;
  console.log(results);

  return (
    <div className="filter-group">
      <h6>Insurance Type</h6>
      {results &&
        results.map((typeItem, typeIndex) => (
          <TestFilterItem
            key={`typeItem-${typeIndex}`}
            filterIdentifier={typeItem.insuranceTypeName.value}
          />
        ))}
    </div>
  );
};

export default TestProductTypeFilters;
