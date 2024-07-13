import React from 'react';
import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import { TestProductCardFields } from 'src/types/TestProductCardFields';
import TestCardHighlight from 'src/molecules/Product/TestCardHighlight';

interface ProductDetailCardFields {
  data: {
    item: {
      brand: {
        ProductBrandCards: Array<TestProductCardFields>;
      };
    };
  };
}

interface TestProductDetailsProps {
  params: ComponentParams;
  fields: ProductDetailCardFields;
}

export const Default = (props: TestProductDetailsProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const Cards = props.fields.data.item.brand.ProductBrandCards;
  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Custom cards</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {Cards &&
            Cards.map((carditem, cardindex) => (
              <TestCardHighlight key={`carditem-${cardindex}`} {...carditem} />
            ))}
        </div>
      </div>

      {/*       <TestProductColors {...props} />
      <TestProductOffers {...props} />
      <TestProductSpecifications {...props} /> */}
    </div>
  );
};
