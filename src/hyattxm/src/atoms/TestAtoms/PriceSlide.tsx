import React from 'react';
import { ComponentParams, Field, LinkField, Link, Text } from '@sitecore-jss/sitecore-jss-nextjs';

export interface PriceFeature {
  PriceFeatureText: Field<string>;
}

export interface PriceFeatureFields {
  fields: PriceFeature;
}

export interface PriceSlideFields {
  PriceSlideTitle: Field<string>;
  PriceValue: Field<string>;
  PriceUnit: Field<string>;
  PriceFeatures: Array<PriceFeatureFields>;
  PriceCTA: LinkField;
  PriceCTALabel: Field<string>;
}

export type PriceSlideProps = {
  params: ComponentParams;
  fields: PriceSlideFields;
  parentIndex: number;
};

export const PriceSlide = (props: PriceSlideProps): JSX.Element => {
  const divstyle = props.parentIndex > 1 ? 'border-primary' : '';
  const cardstyle = props.parentIndex > 1 ? 'text-bg-primary border-primary' : '';
  const buttonStyle = props.parentIndex > 0 ? 'btn-primary' : 'btn-outline-primary';
  return (
    <div className="col">
      <div className={`card mb-4 rounded-3 shadow-sm ${divstyle}`}>
        <div className={`card-header py-3 ${cardstyle}`}>
          <h4 className="my-0 fw-normal">
            <Text field={props.fields.PriceSlideTitle} />
          </h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            <Text field={props.fields.PriceValue} />
            <small className="text-body-secondary fw-light">
              /<Text field={props.fields.PriceUnit} />
            </small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            {props.fields.PriceFeatures &&
              props.fields.PriceFeatures.map((featureitem, index) => {
                return (
                  <li key={`featureitem-${index}`}>
                    <Text field={featureitem.fields.PriceFeatureText} />
                  </li>
                );
              })}
          </ul>
          <Link
            type="button"
            field={props.fields.PriceCTA}
            className={`w-100 btn btn-lg ${buttonStyle}`}
          >
            <Text field={props.fields.PriceCTALabel} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceSlide;
