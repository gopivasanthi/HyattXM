import React from 'react';
import { ComponentParams, ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';

export interface TeaserImageField {
  TeaserImageField:ImageField;
  ImageHeight:string;
  ImageWidth:string;
}

export type TeaserImagesProps =  {
  params: ComponentParams;
  fields: TeaserImageField;
}

export const TeaserImages = (props: TeaserImagesProps): JSX.Element => {

  return (
    <Image
            field={props.fields.TeaserImageField}
            height={props.fields.ImageHeight}
            width={props.fields.ImageWidth}
            className="d-block mx-lg-auto img-fluid"
          />
  );
};

export default TeaserImages;
