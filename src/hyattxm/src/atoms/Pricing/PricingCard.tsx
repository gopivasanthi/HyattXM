import React from 'react';
import { ComponentParams, Field, LinkField, Text, Link } from '@sitecore-jss/sitecore-jss-nextjs';

export interface PricingFeatureList {
  PricingFeatureText: Field<string>;
}
export interface PricingFeatureField {
  fields: PricingFeatureList;
}
export interface PricingCardFields {
  PricingCardTitle: Field<string>;
  PricingCardValue: Field<string>;
  PricingCardUnit: Field<string>;
  PricingFeatures: Array<PricingFeatureField>;
  PricingCTAUrl: LinkField;
  PricingCTALabel: Field<string>;
}
export type PricingCardProps = {
  params: ComponentParams;
  fields: PricingCardFields;
  parentIndex: number;
};

export const PricingCard = (props: PricingCardProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const buttonstyle = props.parentIndex > 0 ? 'btn-primary' : 'btn-outline-primary';
  const cardStyle = props.parentIndex > 1 ? 'border-primary' : '';
  const cardHeaderStyle = props.parentIndex > 1 ? 'text-bg-primary border-primary' : '';
  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="col">
        <div className={`card mb-4 rounded-3 shadow-sm ${cardStyle}`}>
          <div className={`card-header py-3 ${cardHeaderStyle}`}>
            <h4 className="my-0 fw-normal">
              <Text field={props.fields.PricingCardTitle} />
            </h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              <Text field={props.fields.PricingCardValue} />
              <small className="text-body-secondary fw-light">
                /<Text field={props.fields.PricingCardUnit} />
              </small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              {props.fields.PricingFeatures &&
                props.fields.PricingFeatures.slice(4).map((featureitem, index) => {
                  return (
                    <li key={`featureitem-${index}`}>
                      <Text field={featureitem.fields.PricingFeatureText} />
                    </li>
                  );
                })}
            </ul>
            <Link
              type="button"
              field={props.fields.PricingCTAUrl}
              className={`w-100 btn btn-lg ${buttonstyle}`}
            >
              <Text field={props.fields.PricingCTALabel} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;