import React from 'react';
import { ComponentParams, Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

export interface BannerImageFields {
  Image: ImageField;
  BannerImageWidth: number;
  BannerImageHeight: number;
}

export type ProductBannerImageProps = {
  params: ComponentParams;
  fields: BannerImageFields;
}

export const ProductBannerImage = (props: ProductBannerImageProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <Image
        field={props.fields.Image}
        height={props.fields.BannerImageHeight}
        width={props.fields.BannerImageWidth}
        className="d-block mx-lg-auto img-fluid"
      />
    </div>
  );
};

export default ProductBannerImage;
