import React from 'react';
import { ComponentParams, Field, Text, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

export interface ProductBannerContentFields {
  Heading: Field<string>;
  Description: Field<string>;
}

export type ProductBannerContentProps = {
  params: ComponentParams;
  fields: ProductBannerContentFields;
};

export const ProductBannerContent = (props: ProductBannerContentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
        <Text field={props.fields.Heading} />
      </h1>
      <RichText className="lead" field={props.fields.Description} />
    </div>
  );
};

export default ProductBannerContent;
