import React from 'react';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import TestCardHighlight, { TestCardHighlightProps } from 'src/molecules/Product/TestCardHighlight';
import TestProductColors, {
  TestProductColorsProps,
} from 'src/molecules/Product/Features/TestProductColors';
import TestProductOffers, {
  TestProductOffersProps,
} from 'src/molecules/Product/Features/TestProductOffers';
import TestProductSpecifications, {
  TestProductSpecificationsProps,
} from 'src/molecules/Product/Features/TestProductSpecifications';

interface ProductDetailCardFields {
  Brand: Array<TestCardHighlightProps>;
}

interface TestProductDetailsProps
  extends TestProductColorsProps,
    TestProductOffersProps,
    TestProductSpecificationsProps {
  rendering: ComponentRendering & { params: ComponentParams };
  fields: ProductDetailCardFields;
}

export const Default = (props: TestProductDetailsProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
   {/*    <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Custom cards</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {props.fields.Brand &&
            props.fields.Brand.map((highlightcard, index) => {
              const pricingCardProps: TestCardHighlightProps = {
                params: props.params,
                fields: highlightcard.fields,
              };
              console.log(pricingCardProps);
              return (
                <div key={`pricecard-${index}`}>
                  <TestCardHighlight {...pricingCardProps} />
                </div>
              );
            })}
        </div>
      </div> */}
      <TestProductColors {...props} />
      <TestProductOffers {...props} />
      <TestProductSpecifications {...props} />
    </div>
  );
};
