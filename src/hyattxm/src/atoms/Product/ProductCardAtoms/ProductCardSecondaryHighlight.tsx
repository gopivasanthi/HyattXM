import React from 'react';
import { ProductCardHighlightFields } from 'src/types/Product/ProductCard/ProductCardHighlightFields';

export const ProductCardSecondaryHighlight = (props: ProductCardHighlightFields): JSX.Element => {
  return (
    <li className="d-flex align-items-center me-3">
      <img
        src={props.highlightImageUrl.value}
        alt={props.highlightImageAlt.value}
        width="1em"
        height="1em"
        className="me-2"
      />
      <small>{props.highlightText.value}</small>
    </li>
  );
};

export default ProductCardSecondaryHighlight;
