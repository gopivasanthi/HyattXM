import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import customgraphqlclient from 'lib/graphql-custom/customgraphqlclient';
import React from 'react';
import TestFilterItem from 'src/atoms/Product/TestAtoms/TestFilterItem';
import { TestTypeItemFields } from 'src/types/TestTypeItemFields';

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
          id
          template {
            name
          }
        }
      }
    }
  }
`;
interface TestProductTypeFiltersProps {
  onCheckBoxSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const TestProductTypeFilters: React.FC<TestProductTypeFiltersProps> = ({
  onCheckBoxSelect,
}): JSX.Element => {
  const { loading, error, data } = useQuery(PRODUCTS_FILTERS, {
    client: customgraphqlclient,
  });
  if (loading) return <p>Loading data....</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Not data found!</p>;
  const { results } = data.searchProductType;
  return (
    <div className="filter-group">
      <h6>Insurance Type</h6>
      {results &&
        results.map(
          (typeItem: React.JSX.IntrinsicAttributes & TestTypeItemFields, typeIndex: number) => (
            <TestFilterItem
              key={`typeItem-${typeIndex}`}
              filterItemIdentifier={typeItem.template.name}
              filterItemIdentifierValue={typeItem.id}
              filterIdentifier={typeItem.insuranceTypeName.value}
              onCheckBoxSelect={(event) => onCheckBoxSelect(event)}
            />
          )
        )}
    </div>
  );
};

export default TestProductTypeFilters;
