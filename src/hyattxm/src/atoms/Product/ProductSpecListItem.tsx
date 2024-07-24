import React from 'react';
import { SpecificsDetailFields } from 'src/types/Product/ProductCard/SpecificsDetailFields';

export const ProductSpecListItem = (props: SpecificsDetailFields): JSX.Element => {
  console.log(props);
  return (
    <li className="d-flex gap-4">
      <img
        className="bi text-body-secondary flex-shrink-0"
        width="48"
        height="48"
        src={props.productspecicon.jsonValue.value.src}
        alt={props.productspecicon.jsonValue.value.alt}
      />
      <div className="text-dark">
        <h5 className="mb-0">{props.productspectitle.value}</h5>
        {props.productspectext.value}
      </div>
    </li>
  );
};

export default ProductSpecListItem;
