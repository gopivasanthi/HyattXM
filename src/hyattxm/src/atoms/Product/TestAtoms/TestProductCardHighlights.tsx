import React from 'react';
import { TestProductCardHighlightsFields } from 'src/types/TestProductCardHighlightsFields';

export const Default = (props: TestProductCardHighlightsFields): JSX.Element => {
  return (
    <li className="d-flex align-items-center me-3">
      <img
        src={props.HighlightIconImageUrl}
        alt={props.HighlightIconImageAlt}
        width="16"
        height="16"
        className="bi me-2"
      />
      <small>{props.HighlightText}</small>
    </li>
  );
};
