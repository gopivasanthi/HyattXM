import React from 'react';
import { ComponentParams, Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';

export interface TeaserContentField {
  TeaserTitle: Field<string>;
  TeaserDescription: Field<string>;
}

export type TeaserContentProps = {
  params: ComponentParams;
  fields: TeaserContentField;
};

export const TeaserContent = (props: TeaserContentProps): JSX.Element => {
  return (
    <div>
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
        <Text field={props.fields.TeaserTitle} />
      </h1>
      <p className="lead">
        <Text field={props.fields.TeaserDescription} />
      </p>
    </div>
  );
};

export default TeaserContent;
