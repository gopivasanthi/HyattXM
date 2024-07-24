import React from 'react';
import { TestProductCardHighlightsFields } from 'src/types/TestProductCardHighlightsFields';

export const TestProductCardHighlights = (props: TestProductCardHighlightsFields): JSX.Element => {
  return (
    <li className="d-flex align-items-center me-3">
      <img
        src={props.highlightImageUrl.value}
        alt={props.highlightImageAlt.value}
        width="16"
        height="16"
        className="bi me-2"
      />
      <small>{props.highlightText.value}</small>
    </li>
  );
};

export default TestProductCardHighlights;
