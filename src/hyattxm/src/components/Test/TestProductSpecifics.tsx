import React from 'react';
import { gql, useQuery } from '@apollo/client';
import customgraphqlclient from 'src/lib/graphql-custom/customgraphqlclient';
import TestProductSpecList from 'src/molecules/Product/TestProductSpecList';

const PRODUCT_SPECIFICS_QUERY = gql`
  query GetProductSpecifics($brandName: String!) {
    search(where: { AND: [{ name: "_name", value: $brandName, operator: EQ }] }) {
      results {
        id
        name
        templatename: __typename
        ... on ProductBrandCard {
          primaryColor {
            targetItems {
              ... on ProductColor {
                productspectitle: colorRGBName {
                  value
                }
                productspectext: colorRGB {
                  value
                }
                productspecicon: colorImageReference {
                  jsonValue
                }
              }
            }
          }
          basicFeatures {
            targetItems {
              ... on ProductFeature {
                productspectitle: featureReference {
                  value
                }
                productspectext: featureBrief {
                  value
                }
                productspecicon: featureImage {
                  jsonValue
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface ProductSpecificsProps {
  showModal: boolean;
  brandName: string;
  handleClose: () => void;
}

export const TestProductSpecifics: React.FC<ProductSpecificsProps> = ({
  showModal,
  brandName,
  handleClose,
}) => {
  const { loading, error, data } = useQuery(PRODUCT_SPECIFICS_QUERY, {
    client: customgraphqlclient,
    variables: { brandName },
  });
  if (loading) return <p>Loading data....</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found</p>;
  console.log(data);
  return showModal ? (
    <div
      className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
      tabIndex="-1"
      role="dialog"
      id="modalTour"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-body p-5 text-dark">
            <h2 className="fw-bold mb-0">What's new</h2>
            {data.search.results &&
              data.search.results.map((resultitem, resultindex) => (
                <TestProductSpecList key={`resultitem-${resultindex}`} {...resultitem} />
              ))}

            <button
              type="button"
              className="btn btn-lg btn-primary mt-5 w-100"
              data-bs-dismiss="modal"
              onClick={handleClose}
            >
              Great, thanks!
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
