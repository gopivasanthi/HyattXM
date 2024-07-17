import React from 'react';
import { gql, useQuery } from '@apollo/client';
import customgraphqlclient from 'src/lib/graphql-custom/customgraphqlclient';
import ProductSpecList from 'src/molecules/Product/ProductSpecList';

const PRODUCT_SPECIFICS_QUERY = gql`
  query GetProductSpecifics($ProductName:String!) {
    search(
      where: {
        AND: [{ name: "_name", value: $ProductName, operator: EQ }]
      }
    ) {
      results {
        ... on ProductBrandCard {
          name
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
          basicSpecifications {
            targetItems {
              ... on ProductSpecification {
                productspectitle: specificationName {
                  value
                }
                productspectext: specificationValue {
                  value
                }
                productspecicon: specificationImage {
                  jsonValue
                }
              }
            }
          }
          offers {
            targetItems {
              ... on ProductOffers {
                offerReference {
                  value
                }
                offerPercentage {
                  value
                }
                offerStartDate {
                  value
                }
                offerEndDate {
                  value
                }
                offerImage {
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
  handleClose: () => void;
  ProductName: string;
}

export const ProductSpecifics: React.FC<ProductSpecificsProps> = ({ showModal, handleClose, ProductName }) => {
  const { loading, error, data } = useQuery(PRODUCT_SPECIFICS_QUERY, {
    client: customgraphqlclient,
    variables: { ProductName }
  });
  if (loading) return <p>Loading data....</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found</p>;

  return showModal ? (
    <div
      className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
      tabIndex="-1"
      role="dialog"
      id="modalTour"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-body p-5">
            {data.search.results && data.search.results.map((resultitem,resultindex) => (
              <ProductSpecList key={`resultitem-${resultindex}`} {...resultitem} />
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
