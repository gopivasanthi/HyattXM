import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  Text,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface PriceSlideFields {
  priceSlideTitle: {
    value: string;
  };
  priceUnit: {
    value: string;
  };
  priceValue: {
    value: string;
  };
}

interface PriceListFields {
  priceIntroHeading: Field<string>;
  priceIntroDescription: Field<string>;
  priceSlideList: {
    targetItems: PriceSlideFields[];
  };
}

interface TestPriceListGraphQLProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    data: {
      item: PriceListFields;
    };
  };
}

export const Default = (props: TestPriceListGraphQLProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const { item } = props.fields.data;
  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="container py-3">
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal text-body-emphasis">
              {item.priceIntroHeading.value}
              <Text field={item.priceIntroHeading as Field<string>} />
            </h1>
            <div className="fs-5 text-body-secondary">
              <RichText field={item.priceIntroDescription as Field<string>} />
            </div>
          </div>
        </header>
        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {item.priceSlideList.targetItems &&
              item.priceSlideList.targetItems.map((slide, index) => {
                return (
                  <div key={index} className="price-slide">
                    <h3>{slide.priceSlideTitle.value}</h3>
                    <p>
                      {slide.priceValue.value} / {slide.priceUnit.value}
                    </p>
                  </div>
                );
              })}
          </div>
        </main>
      </div>
    </div>
  );
};
