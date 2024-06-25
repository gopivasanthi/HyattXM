import React from 'react';
import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import ProductHeroText, { ProductHeroTextFields } from 'src/atoms/Product/ProductHeroText';
import ProductHeroCTA, { ProductHeroCTAFields } from 'src/atoms/Product/ProductHeroCTA';

interface ProductHeroFields {
  datasourceitemtext: ProductHeroTextFields;
  datasourceitemcta: ProductHeroCTAFields;
  contextitem: {
    title: {
      value: string;
    };
  };
}

interface ProductHeroProps {
  params: ComponentParams;
  fields: {
    data: ProductHeroFields;
  };
}

export const Default = (props: ProductHeroProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  console.log(props);
  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div className="col-md-6 p-lg-5 mx-auto my-5">
          <h1>{props.fields.data.contextitem.title.value}</h1>
          <ProductHeroText {...props.fields.data.datasourceitemtext} />
          <div className="d-flex gap-3 justify-content-center lead fw-normal">
            <ProductHeroCTA {...props.fields.data.datasourceitemcta} />
          </div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </div>
  );
};
