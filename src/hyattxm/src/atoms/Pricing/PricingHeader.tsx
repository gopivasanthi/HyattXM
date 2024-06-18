import React from 'react';
import { ComponentParams, Field, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

export interface PricingHeaderFields {
  PricingHeading: Field<string>;
  PricingDescription: Field<string>;
}

export type PricingHeaderProps = {
  params: ComponentParams;
  fields: PricingHeaderFields;
};

export const PricingHeader = (props: PricingHeaderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal text-body-emphasis">
          <Text field={props.fields.PricingHeading} />
        </h1>
        <RichText className="fs-5 text-body-secondary" field={props.fields.PricingDescription} />
      </div>
    </div>
  );
};

export default PricingHeader;
