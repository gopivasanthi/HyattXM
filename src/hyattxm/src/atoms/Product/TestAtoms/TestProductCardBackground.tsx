import React from 'react';

import { TestProductCardFields } from 'src/types/TestProductCardFields';

export const TestProductCardBackground = (props: TestProductCardFields): JSX.Element => {
  return (
    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{props.productCardTitle.value}</h3>
  );
};

export default TestProductCardBackground;