import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import customgraphqlclient from 'lib/graphql-custom/customgraphqlclient';
import { TestProductLists } from 'src/molecules/TestProductLists';

const PRODUCT_LISTS = gql`
  query GetProductListing($ProductTemplateId: String!, $after: String) {
    search(
      where: { AND: [{ name: "_templates", value: $ProductTemplateId, operator: EQ }] }
      first: 3
      after: $after
    ) {
      total
      pageInfo {
        endCursor
        hasNext
      }
      results {
        ... on HyattProductDetailPage {
          title {
            value
          }
          insuranceType {
            targetItem {
              name
            }
          }
          insuranceScope {
            targetItem {
              name
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
  const ProductTemplateId = '{9CDA0E3B-7F23-4DE1-8501-38E460E613E4}';
  const [after] = useState<string | null>(null);

  const { data, error, loading, fetchMore } = useQuery(PRODUCT_LISTS, {
    client: customgraphqlclient,
    variables: { ProductTemplateId, after },
  });

  if (loading) return <p>Loading data....</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found</p>;

  const { pageInfo, results } = data.search;

  const handleNextPage = () => {
    if (pageInfo.hasNext) {
      fetchMore({
        variables: {
          after: pageInfo.endCursor,
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
  console.log(pageInfo);
  console.log(results);
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
          <TestProductLists results={results} />
          <div className="pagination-controls">
            <button onClick={handleNextPage} disabled={!pageInfo.hasNext}>
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
