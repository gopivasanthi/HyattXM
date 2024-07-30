import React from 'react';
import { gql, useQuery } from '@apollo/client';
import customgraphqlclient from 'lib/graphql-custom/customgraphqlclient';
import { ProductListTypeFields } from 'src/types/Product/Listing/ProductListTypeFields';
import ProductListFilterItem from 'src/atoms/Product/Listing/ProductListFilterItem';

const PRODUCT_TYPE_FILTERS = gql`
  query GetProductListTypeFilter {
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

interface ProductListTypeFilterProps {
  onRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProductListTypeFilter: React.FC<ProductListTypeFilterProps> = ({
  onRadioChange,
}): JSX.Element => {
  const { loading, error, data } = useQuery(PRODUCT_TYPE_FILTERS, {
    client: customgraphqlclient,
  });
  if (loading) return <p>Loading data... </p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found!</p>;
  const { results } = data.searchProductType;

  return (
    <div className="filter-group">
      <h6>Product Type</h6>
      {results &&
        results.map(
          (typeItem: React.JSX.IntrinsicAttributes & ProductListTypeFields, typeIndex: number) => (
            <ProductListFilterItem
              key={`typeitem-${typeIndex}`}
              filterIdentifier={typeItem.id}
              filterTypeIdentifier={typeItem.template.name}
              filterItemValue={typeItem.insuranceTypeName.value}
              onRadioChange={(event) => onRadioChange(event)}
            />
          )
        )}
    </div>
  );
};

export default ProductListTypeFilter;
