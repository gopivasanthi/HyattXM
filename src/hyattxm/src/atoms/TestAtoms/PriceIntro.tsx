import React from 'react';
import { ComponentParams, Field, RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';

export interface PriceIntroFeilds {
  PriceIntroHeading: Field<string>;
  PriceIntroDescription: Field<string>;
}

export type PriceIntroProps = {
  params: ComponentParams;
  fields: PriceIntroFeilds;
}

export const PriceIntro = (props: PriceIntroProps): JSX.Element => {
  return (
    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 className="display-4 fw-normal text-body-emphasis">
        <Text field={props.fields.PriceIntroHeading} />
      </h1>
      <div className="fs-5 text-body-secondary">
        <RichText field={props.fields.PriceIntroDescription} />
      </div>
    </div>
  );
};

export default PriceIntro;
