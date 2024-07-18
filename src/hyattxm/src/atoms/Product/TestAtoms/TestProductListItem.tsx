import React from 'react';
import { TestProductListItemFields } from 'src/types/Product/TestProductListing/TestProductListItemFields';

export const TestProductListItem = (props: TestProductListItemFields): JSX.Element => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          src={props.productImage.src}
          alt={props.productImage.alt}
        />
        <div className="card-body">
          <p className="card-text">{props.title.value}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">
                {props.insuranceScope.targetItem.name}
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary">
                {props.insuranceType.targetItem.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestProductListItem;