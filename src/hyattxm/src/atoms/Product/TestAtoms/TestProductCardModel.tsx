import React from 'react';
import { gql, useQuery } from '@apollo/client';
import testappolloclient from 'src/lib/testgraphql/testappolloclient';

interface Sitecoredataitem {
  data: {
    itemresult: {
      id: string;
      name: string;
    };
  };
}

const GET_ITEMS_QUERY = gql`
  query {
    itemresult: item(
      language: "en"
      path: "/sitecore/content/HyattXM/HyattXM/Data/ProductDetail/Kids-Shoes"
    ) {
      id
      name
    }
  }
`;

export const TestProductCardModel = () => {
  const { loading, error, data } = useQuery(GET_ITEMS_QUERY, { client: testappolloclient });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data) return <p>No data</p>;

  console.log(data);
  return (
    <div>
      <div className="component-content">
        <p>TestProductCardModel Component</p>
      </div>
    </div>
  );
};

export default TestProductCardModel;
