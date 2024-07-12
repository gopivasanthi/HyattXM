import React from 'react';

import { TestProductCardHighlightsFields } from 'src/types/TestProductCardHighlightsFields';

export const Default = (props: TestProductCardHighlightsFields): JSX.Element => {
  return (
    <li className="me-auto">
      <img
        src={props.HighlightIconImageUrl}
        alt={props.HighlightIconImageAlt}
        width="32"
        height="32"
        className="rounded-circle border border-white"
      />
    </li>
  );
};
