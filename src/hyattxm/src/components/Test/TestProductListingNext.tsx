import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import customgraphqlclient from 'lib/graphql-custom/customgraphqlclient';
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
      pageInfo {
        endCursor
        hasNext
      }
    }
  searchProductType:search(where:{ 
        AND: 
        [
          { name: "_templates", value: "{9E3271F8-7BA8-43D8-8AA8-A250A6AF7B28}", operator: EQ }
          { name: "_path", value: "{62698DB7-FCD3-4100-BC09-8F658470A70A}", operator: NEQ }
        ] 
  }){
    
      results {
       ... on ProductType{
        insuranceTypeName{
          value
        }
        
      }
      }
    }
    searchProductScope:search(where:{ 
        AND: 
        [
          { name: "_templates", value: "{4CCAE68F-39AD-4A49-A1A8-50DDFD804574}", operator: EQ }
          { name: "_path", value: "{83BA7AE2-2EFD-4420-958D-79FA38CBDF24}", operator: NEQ }
        ] 
  }){
    
      results {
        ... on ProductScope{
          scopeName{
            value
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
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult;
          setPageHistory([...pageHistory, pageInfo.endCursor]);
          return {
            search: fetchMoreResult.search,
          };
        },
      });
    }
  };

  const handlePreviousPage = () => {
    if (pageHistory.length > 0) {
      const previousCursor = pageHistory[pageHistory.length - 2];
      fetchMore({
        variables: {
          endCursor: previousCursor,
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
              <button onClick={handlePreviousPage} disabled={pageHistory.length < 1}>
                Previous
              </button>
              <button onClick={handleNextPage} disabled={!pageInfo.hasNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
