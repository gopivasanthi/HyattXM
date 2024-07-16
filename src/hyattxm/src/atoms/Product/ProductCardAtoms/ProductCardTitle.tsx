import React from 'react';
import { ProductCardFields } from 'src/types/Product/ProductCard/ProductCardFields';

export const ProductCardTitle = (props: ProductCardFields): JSX.Element => {
  if (props.productCardTitle.value === '') {
    return <h5 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Title not available</h5>;
  } else {
    return (
      <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{props.productCardTitle.value}</h3>
    );
  }
};

export default ProductCardTitle;
