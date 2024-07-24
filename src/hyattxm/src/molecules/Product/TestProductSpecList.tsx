import React from 'react';
import TestProductSpecListItem from 'src/atoms/Product/TestAtoms/TestProductSpecListItem';
import { ProductCardSpecificsFields } from 'src/types/Product/ProductCard/ProductCardSpecificsFields';

export const TestProductSpecList = (props: ProductCardSpecificsFields): JSX.Element => {
  return (
    <div>
      <ul className="d-grid gap-4 my-5 list-unstyled small">
        {props.basicFeatures.targetItems &&
          props.basicFeatures.targetItems.map((featureitem, featureindex) => (
            <TestProductSpecListItem key={`featureitem-${featureindex}`} {...featureitem} />
          ))}
      </ul>
      <ul className="d-grid gap-4 my-5 list-unstyled small">
        {props.primaryColor.targetItems &&
          props.primaryColor.targetItems.map((coloritem, colorindex) => (
            <TestProductSpecListItem key={`featureitem-${colorindex}`} {...coloritem} />
          ))}
      </ul>
    </div>
  );
};

export default TestProductSpecList;
