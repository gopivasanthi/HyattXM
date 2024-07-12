import React from 'react';
import ProductCardTitle from 'src/atoms/Product/ProductCardAtoms/ProductCardTitle';
import { ProductCardFields } from 'src/types/Product/ProductCard/ProductCardFields';

export const EachProductCard = (props: ProductCardFields): JSX.Element => {

  return (
    <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: `url(${props.productCardBackgroundImageUrl.value})` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <ProductCardTitle {...props} />
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <img
                      src="/path/to/geo-fill.svg"
                      alt="Geo Icon"
                      width="1em"
                      height="1em"
                      className="me-2"
                    />
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <img
                      src="/path/to/calendar3.svg"
                      alt="Calendar Icon"
                      width="1em"
                      height="1em"
                      className="me-2"
                    />
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  );
};

export default EachProductCard;