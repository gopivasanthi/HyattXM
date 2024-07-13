import React from 'react';

import { TestProductCardHighlightsFields } from 'src/types/TestProductCardHighlightsFields';

export const TestProductCardPrimaryHighlights = (props: TestProductCardHighlightsFields): JSX.Element => {
  return (
    <li className="me-auto">
      <img
        src={props.highlightImageUrl.value}
        alt={props.highlightImageAlt.value}
        width="32"
        height="32"
        className="rounded-circle border border-white"
      />
    </li>
  );
};

export default TestProductCardPrimaryHighlights;