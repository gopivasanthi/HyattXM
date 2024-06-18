import React from 'react';
import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import ProductBannerImage, { BannerImageFields } from 'src/atoms/Product/ProductBannerImage';
import ProductBannerContent, {
  ProductBannerContentFields,
} from 'src/atoms/Product/ProductBannerContent';

interface ProductBannerFields extends BannerImageFields, ProductBannerContentFields {}

interface ProductBannerProps {
  params: ComponentParams;
  fields: ProductBannerFields;
}

export const Default = (props: ProductBannerProps): JSX.Element => {
  props.fields.BannerImageHeight = 500;
  props.fields.BannerImageWidth = 700;
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <ProductBannerImage {...props} />
        </div>
        <div className="col-lg-6">
          <ProductBannerContent {...props} />
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
