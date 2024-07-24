import React from 'react';
import { ComponentParams, Link, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import TeaserImages from 'src/atoms/TestAtoms/TeaserImages';
import { TeaserImageField } from 'src/atoms/TestAtoms/TeaserImages';
import TeaserContent from 'src/atoms/TestAtoms/TeaserContent';
import { TeaserContentField } from 'src/atoms/TestAtoms/TeaserContent';

interface TestTeaserFields extends TeaserImageField, TeaserContentField {
  TeaserPrimaryClick: LinkField;
  TeaserSecondaryClick: LinkField;
}

interface TestTeaserProps {
  params: ComponentParams;
  fields: TestTeaserFields;
}

export const Default = (props: TestTeaserProps): JSX.Element => {
  console.log(props);
  props.fields.ImageWidth = '700';
  props.fields.ImageHeight = '500';

  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <TeaserImages {...props} />
        </div>
        <div className="col-lg-6">
          <TeaserContent {...props} />
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              field={props.fields.TeaserPrimaryClick}
            >
              Primary
            </Link>
            <Link
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              field={props.fields.TeaserSecondaryClick}
            >
              Secondary
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
