import { gql, useQuery } from '@apollo/client';
import customgraphqlclient from 'lib/graphql-custom/customgraphqlclient';
import React from 'react';
import ProductList from 'src/molecules/Product/Listing/ProductList';

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

export const Default = (): JSX.Element => {
  const { loading, error, data, fetchMore } = useQuery(PRODUCT_LISTING_QUERY, {
    client: customgraphqlclient,
  });

  if (loading) return <p>Loading data....</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Not data found!</p>;
  const { pageInfo, results } = data.search;

  const handleLazyLoad = () => {
    if (pageInfo.hasNext) {
      fetchMore({
        variables: {
          endCursor: pageInfo.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult;
          return {
            search: {
              ...fetchMoreResult.search,
              results: [...previousResult.search.results, ...fetchMoreResult.search.results],
            },
          };
        },
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          {/* Left Sidebar - Filters */}
          <div className="filters">
            <h5>Filters</h5>
            {/* Add your filter components here */}
            <div className="filter-group">
              <label htmlFor="filter1">Filter 1</label>
              <input type="checkbox" id="filter1" name="filter1" />
            </div>
            <div className="filter-group">
              <label htmlFor="filter2">Filter 2</label>
              <input type="checkbox" id="filter2" name="filter2" />
            </div>
            {/* Add more filters as needed */}
          </div>
        </div>
        <div className="col-md-9">
          {/* Right Sidebar - Cards */}
          <div className="container">
            <ProductList results={results} />
            <div className="pagination-controls">
              <button onClick={handleLazyLoad} disabled={!pageInfo.hasNext}>
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
