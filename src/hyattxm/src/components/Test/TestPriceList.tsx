import React from 'react';
import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import PriceIntro from 'src/atoms/TestAtoms/PriceIntro';
import { PriceIntroFeilds } from 'src/atoms/TestAtoms/PriceIntro';
import PriceSlide from 'src/atoms/TestAtoms/PriceSlide';
import { PriceSlideProps } from 'src/atoms/TestAtoms/PriceSlide';

interface PriceListFields extends PriceIntroFeilds {
  PriceSlideList: Array<PriceSlideProps>;
}

interface TestPriceListProps {
  params: ComponentParams;
  fields: PriceListFields;
}

export const Default = (props: TestPriceListProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="container py-3">
        <header>
          <PriceIntro {...props} />
        </header>
        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {props.fields.PriceSlideList &&
              props.fields.PriceSlideList.map((priceitem, index) => {
                const SlideProps: PriceSlideProps = {
                  params: props.params,
                  fields: priceitem.fields,
                  parentIndex: index,
                };
                return (
                  <div key={`priceitem-${index}`}>
                    <PriceSlide {...SlideProps} />
                  </div>
                );
              })}
          </div>
        </main>
      </div>
    </div>
  );
};
