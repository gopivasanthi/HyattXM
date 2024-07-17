import React from 'react';
import ProductSpecListItem from 'src/atoms/Product/ProductSpecListItem';
import { ProductCardSpecificsFields } from 'src/types/Product/ProductCard/ProductCardSpecificsFields';

export const ProductSpecList = (props: ProductCardSpecificsFields): JSX.Element => {
  return (
    <div>
      <h2 className="fw-bold mb-0 text-dark">{props.name}</h2>
      <ul className="d-grid gap-4 my-5 list-unstyled small text-dark">
        {props.basicFeatures.targetItems &&
          props.basicFeatures.targetItems.map((featureitem, featureindex) => (
            <ProductSpecListItem key={`featureitem-${featureindex}`} {...featureitem} />
          ))}
      </ul>
      <ul className="d-grid gap-4 my-5 list-unstyled small text-dark">
        {props.primaryColor.targetItems &&
          props.primaryColor.targetItems.map((coloritem, colorindex) => (
            <ProductSpecListItem key={`featureitem-${colorindex}`} {...coloritem} />
          ))}
      </ul>
    </div>
  );
};

export default ProductSpecList;
