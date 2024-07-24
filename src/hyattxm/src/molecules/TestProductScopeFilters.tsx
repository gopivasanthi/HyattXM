import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import customgraphqlclient from 'lib/graphql-custom/customgraphqlclient';
import TestFilterItem from 'src/atoms/Product/TestAtoms/TestFilterItem';
import { TestScopeItemFields } from 'src/types/TestScopeItemFields';

const PRODUCTS_FILTERS = gql`
  query GetProductFilters {
    searchProductScope: search(
      where: {
        AND: [
          { name: "_templates", value: "{4CCAE68F-39AD-4A49-A1A8-50DDFD804574}", operator: EQ }
          { name: "_path", value: "{83BA7AE2-2EFD-4420-958D-79FA38CBDF24}", operator: NEQ }
        ]
      }
    ) {
      results {
        ... on ProductScope {
          scopeName {
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

interface TestProductScopeFiltersProps {
  onCheckBoxSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TestProductScopeFilters: React.FC<TestProductScopeFiltersProps> = ({
  onCheckBoxSelect,
}): JSX.Element => {
  const { loading, error, data } = useQuery(PRODUCTS_FILTERS, {
    client: customgraphqlclient,
  });
  if (loading) return <p>Loading data....</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Not data found!</p>;
  const { results } = data.searchProductScope;

  return (
    <div className="filter-group">
      <h6>Insurance Scope</h6>
      {results &&
        results.map(
          (scopeItem: React.JSX.IntrinsicAttributes & TestScopeItemFields, scopeIndex: number) => (
            <TestFilterItem
              key={`typeItem-${scopeIndex}`}
              filterItemIdentifier={scopeItem.template.name}
              filterItemIdentifierValue={scopeItem.id}
              onCheckBoxSelect={(event) => onCheckBoxSelect(event)}
              filterIdentifier={scopeItem.scopeName.value}
            />
          )
        )}
    </div>
  );
};

export default TestProductScopeFilters;
