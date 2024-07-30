import React from 'react';
import { gql, useQuery } from '@apollo/client';
import customgraphqlclient from 'lib/graphql-custom/customgraphqlclient';
import { ProductListScopeFields } from 'src/types/Product/Listing/ProductListScopeFields';
import ProductListFilterItem from 'src/atoms/Product/Listing/ProductListFilterItem';

const PRODUCT_SCOPE_FILTERS = gql`
  query GetProductListScopeFilter {
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

interface ProductListScopeFilterProps {
  onRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProductListScopeFilter: React.FC<ProductListScopeFilterProps> = ({
  onRadioChange,
}): JSX.Element => {
  const { loading, error, data } = useQuery(PRODUCT_SCOPE_FILTERS, {
    client: customgraphqlclient,
  });

  if (loading) return <p>Loading data... </p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found!</p>;

  const { results } = data.searchProductScope;

  return (
    <div className="filter-group">
      <h6>Product Scope</h6>
      {results &&
        results.map(
          (
            scopeItem: React.JSX.IntrinsicAttributes & ProductListScopeFields,
            scopeIndex: number
          ) => (
            <ProductListFilterItem
              key={`scopeitem-${scopeIndex}`}
              filterIdentifier={scopeItem.id}
              filterTypeIdentifier={scopeItem.template.name}
              filterItemValue={scopeItem.scopeName.value}
              onRadioChange={(event) => onRadioChange(event)}
            />
          )
        )}
    </div>
  );
};

export default ProductListScopeFilter;
