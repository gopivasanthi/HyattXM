import React from 'react';
import { gql, useQuery } from '@apollo/client';
import customgraphqlclient from 'src/lib/graphql-custom/customgraphqlclient';

const PRODUCT_SPECIFICS_QUERY = gql`
  query GetProductSpecifics {
    search(
      where: {
        AND: [{ name: "_path", value: "{4B65E8BE-E7B2-4452-948D-8D38F94EC622}", operator: EQ }]
      }
    ) {
      results {
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
}

export const ProductSpecifics: React.FC<ProductSpecificsProps> = ({ showModal, handleClose }) => {
  const { loading, error, data } = useQuery(PRODUCT_SPECIFICS_QUERY, {
    client: customgraphqlclient,
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
            <h2 className="fw-bold mb-0">What's new</h2>
            <ul className="d-grid gap-4 my-5 list-unstyled small">
              <li className="d-flex gap-4">
                <img
                  className="bi text-body-secondary flex-shrink-0"
                  width="48"
                  height="48"
                  src="path/to/grid-fill.svg"
                  alt="Grid view icon"
                />
                <div>
                  <h5 className="mb-0">Grid view</h5>
                  Not into lists? Try the new grid view.
                </div>
              </li>
              <li className="d-flex gap-4">
                <img
                  className="bi text-warning flex-shrink-0"
                  width="48"
                  height="48"
                  src="path/to/bookmark-star.svg"
                  alt="Bookmarks icon"
                />
                <div>
                  <h5 className="mb-0">Bookmarks</h5>
                  Save items you love for easy access later.
                </div>
              </li>
              <li className="d-flex gap-4">
                <img
                  className="bi text-primary flex-shrink-0"
                  width="48"
                  height="48"
                  src="path/to/film.svg"
                  alt="Video embeds icon"
                />
                <div>
                  <h5 className="mb-0">Video embeds</h5>
                  Share videos wherever you go.
                </div>
              </li>
            </ul>
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
