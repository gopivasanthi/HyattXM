import { gql, useQuery } from '@apollo/client';
import customgraphqlclient from 'lib/graphql-custom/customgraphqlclient';
import React, { useState } from 'react';
import ProductListItemCard from 'src/atoms/Product/Listing/ProductListItemCard';
import { ProductListItemCardFields } from 'src/types/Product/Listing/ProductListItemCardFields';

const PRODUCT_LISTING_QUERY = gql`
  query GetProductListing($endCursor: String) {
    search(
      where: {
        AND: [
          { name: "_templates", value: "{9CDA0E3B-7F23-4DE1-8501-38E460E613E4}", operator: EQ }
          {
            AND: [{ name: "_path", value: "{EB78A095-6A72-42A0-BFB7-22019292A60A}", operator: NEQ }]
          }
        ]
      }
      first: 3
      after: $endCursor
    ) {
      total
      pageInfo {
        hasNext
        endCursor
      }
      results {
        ... on HyattProductDetailPage {
          productDetailPageUrl: url {
            path
          }
          productPageTitle: title {
            value
          }
          productType: insuranceType {
            targetItem {
              ... on ProductType {
                productTypeName: insuranceTypeName {
                  value
                }
              }
            }
          }
          productScope: insuranceScope {
            targetItem {
              ... on ProductScope {
                productScopeName: scopeName {
                  value
                }
              }
            }
          }
          productImage {
            src
            alt
          }
        }
      }
    }
  }
`;

interface ProductListProps{
  selectedTypeFilter:string;
  selectedScopeFilter:string;
}

export const ProductList: React.FC<ProductListProps> = ({selectedScopeFilter, selectedTypeFilter}): JSX.Element => {
  const { loading, error, data, fetchMore } = useQuery(PRODUCT_LISTING_QUERY, {
    client: customgraphqlclient,
    variables:{
      endCursor:null,
      SelectedScopeFilter:selectedScopeFilter,
      SelectedTypeFilter:selectedTypeFilter
    }
  });
  const [pageHistory, setPageHistory] = useState<string[]>([]);
  if (loading) return <p>Loading data....</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Not data found!</p>;

  const { pageInfo, results } = data.search;

  const handleNextPage = () => {
    if (pageInfo.hasNext) {
      fetchMore({
        variables: {
          endCursor: pageInfo.endCursor,
          SelectedScopeFilter:selectedScopeFilter,
          SelectedTypeFilter:selectedTypeFilter
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult;
          setPageHistory([...pageHistory, pageInfo.endCursor]);
          return {
            search: fetchMoreResult.search,
          };
        },
      });
    } else {
      alert('NextItem Not Available');
    }
  };

  const handlePreviousPage = () => {
    if (pageHistory.length > 0) {
      const previousCursor = pageHistory[pageHistory.length - 2];
      fetchMore({
        variables: {
          endCursor: previousCursor,
          SelectedScopeFilter:selectedScopeFilter,
          SelectedTypeFilter:selectedTypeFilter
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult;
          setPageHistory(pageHistory.slice(0, -1));
          return {
            search: fetchMoreResult.search,
          };
        },
      });
    }
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {results &&
          results.map(
            (
              resultitem: React.JSX.IntrinsicAttributes & ProductListItemCardFields,
              resultindex: number
            ) => <ProductListItemCard key={`resultitem-${resultindex}`} {...resultitem} />
          )}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={pageHistory.length < 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={!pageInfo.hasNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
