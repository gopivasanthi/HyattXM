import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import customgraphqlclient from 'lib/graphql-custom/customgraphqlclient';
import TestProductListItem from 'src/atoms/Product/TestAtoms/TestProductListItem';
import { TestProductListItemFields } from 'src/types/Product/TestProductListing/TestProductListItemFields';

interface TestProductListResultsProps {
  selectedTypeFilter: string;
  selectedScopeFilter: string;
}

const PRODUCT_LISTS = gql`
  query GetProductListing(
    $endCursor: String
    $SelectedTypeFilter: String
    $SelectedScopeFilter: String
  ) {
    search(
      where: {
        AND: [
          { name: "_templates", value: "{9CDA0E3B-7F23-4DE1-8501-38E460E613E4}", operator: EQ }
          {
            AND: [
              { name: "insuranceType", value: $SelectedTypeFilter, operator: EQ }
              { name: "insuranceScope", value: $SelectedScopeFilter, operator: EQ }
            ]
          }
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
                id
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
  }
`;

export const TestProductListResults: React.FC<TestProductListResultsProps> = ({
  selectedTypeFilter,
  selectedScopeFilter,
}): JSX.Element => {
  const { loading, error, data, fetchMore } = useQuery(PRODUCT_LISTS, {
    client: customgraphqlclient,
    variables: {
      endCursor: null,
      SelectedTypeFilter: selectedTypeFilter || '',
      SelectedScopeFilter: selectedScopeFilter || '',
    },
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
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {results &&
          results.map(
            (
              resultitem: React.JSX.IntrinsicAttributes & TestProductListItemFields,
              resultindex: number
            ) => <TestProductListItem key={`resultitem-${resultindex}`} {...resultitem} />
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

export default TestProductListResults;
