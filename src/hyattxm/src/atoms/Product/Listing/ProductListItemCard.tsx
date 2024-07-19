import React from 'react';
import TagButton from 'src/atoms/Common/Buttons/TagButton';
import { ProductListItemCardFields } from 'src/types/Product/Listing/ProductListItemCardFields';

export const ProductListItemCard = (props: ProductListItemCardFields): JSX.Element => {
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
          <p className="card-text">
            <a href={props.productDetailPageUrl.path}>{props.productPageTitle.value}</a>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <TagButton buttonDisplayText={props.productType.targetItem.productTypeName.value} />
              <TagButton buttonDisplayText={props.productScope.targetItem.productScopeName.value} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItemCard;
