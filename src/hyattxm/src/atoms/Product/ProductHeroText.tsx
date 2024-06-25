import React from 'react';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';

export interface ProductHeroTextFields {
  pageHeading: {
    value: string;
  };
  subText: {
    value: string;
  };
}

export const ProductHeroText = (props: ProductHeroTextFields): JSX.Element => {
  return (
    <div>
      <h1 className="display-3 fw-bold">
        <Text field={props.pageHeading as Field<string>} />
      </h1>
      <h3 className="fw-normal text-muted mb-3">
        <Text field={props.subText as Field<string>} />
      </h3>
    </div>
  );
};

export default ProductHeroText;
