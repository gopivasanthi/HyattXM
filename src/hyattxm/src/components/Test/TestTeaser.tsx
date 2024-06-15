import React from 'react';
import useRouter from 'next/router';
import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import TeaserImages from 'src/atoms/TestAtoms/TeaserImages';
import { TeaserImageField } from 'src/atoms/TestAtoms/TeaserImages';
import TeaserContent from 'src/atoms/TestAtoms/TeaserContent';
import { TeaserContentField } from 'src/atoms/TestAtoms/TeaserContent';

interface TestTeaserFields extends TeaserImageField, TeaserContentField {
  TeaserPrimaryClick: string;
  TeaserSecondaryClick: string;
}

interface TestTeaserProps {
  params: ComponentParams;
  fields: TestTeaserFields;
}

export const Default = (props: TestTeaserProps): JSX.Element => {
  const router = useRouter;
  console.log(props);
  props.fields.ImageWidth = '700';
  props.fields.ImageHeight = '500';

  const handlePrimaryClick = () => {
    router.push(props.fields.TeaserPrimaryClick);
  };

  const handleSecondaryClick = () => {
    router.push(props.fields.TeaserSecondaryClick);
  };

  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <TeaserImages {...props} />
        </div>
        <div className="col-lg-6">
          <TeaserContent {...props} />
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              onClick={handlePrimaryClick}
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              onClick={handleSecondaryClick}
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
