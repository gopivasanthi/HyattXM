import React from 'react';
import {
  ComponentParams,
  Field,
  ImageField,
  Text,
  RichText,
  Image,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface ProductBannerFields {
  Heading: Field<string>;
  Description: Field<string>;
  Image: ImageField;
}

interface ProductBannerProps {
  params: ComponentParams;
  fields: ProductBannerFields;
}

export const Default = (props: ProductBannerProps): JSX.Element => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <Image
            field={props.fields.Image}
            height={500}
            width={700}
            className="d-block mx-lg-auto img-fluid"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            <Text field={props.fields.Heading} />
          </h1>
          <RichText className="lead" field={props.fields.Description} />
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
              Primary
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
