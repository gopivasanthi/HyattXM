import React from 'react';

import { TestCardHighlightsFields } from 'src/types/TestCardHighlightsFields';

export const TestProductCardBackground = (props: TestCardHighlightsFields): JSX.Element => {
  return (
    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{props.ProductCardTitle}</h3>
  );
};

export default TestProductCardBackground;