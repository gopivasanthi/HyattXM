import React from 'react';
import { ProductCardHighlightFields } from 'src/types/Product/ProductCard/ProductCardHighlightFields';

export const ProductCardPrimaryHighlight = (props: ProductCardHighlightFields): JSX.Element => {
  return (
    <li className="me-auto">
      <img
        src={props.highlightImageUrl.value}
        alt={props.highlightImageAlt.value}
        width="32"
        height="32"
        className="rounded-circle border border-white"
      />
    </li>
  );
};

export default ProductCardPrimaryHighlight;