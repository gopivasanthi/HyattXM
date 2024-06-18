import React from 'react';
import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import PricingCard, { PricingCardProps } from 'src/atoms/Pricing/PricingCard';
import PricingHeader, { PricingHeaderFields } from 'src/atoms/Pricing/PricingHeader';

interface ProductPricingFields extends PricingHeaderFields {
  ProductPriceList: Array<PricingCardProps>;
}

interface ProductPricingProps {
  params: ComponentParams;
  fields: ProductPricingFields;
}

export const Default = (props: ProductPricingProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="container py-3">
        <header>
          <PricingHeader {...props} />
        </header>
        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {props.fields.ProductPriceList &&
              props.fields.ProductPriceList.slice(3).map((pricecard, index) => {
                const pricingCardProps: PricingCardProps = {
                  params: props.params,
                  fields: pricecard.fields,
                  parentIndex: index,
                };
                return (<PricingCard {...pricingCardProps} />);
              })}
          </div>
        </main>
      </div>
    </div>
  );
};
