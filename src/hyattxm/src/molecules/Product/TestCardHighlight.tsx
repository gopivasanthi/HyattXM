import React from 'react';
import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import { TestCardHighlightsFields } from 'src/types/TestCardHighlightsFields';
import TestProductCardBackground from 'src/atoms/Product/TestAtoms/TestProductCardBackground';

export interface TestCardHighlightProps {
  params: ComponentParams;
  fields: TestCardHighlightsFields;
}

export const TestCardHighlight = (props: TestCardHighlightProps): JSX.Element => {
  return (
    <div className="col">
      <div
        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        style={{ backgroundImage: `url(${props.fields.ProductCardBackgroundImageUrl})` }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <TestProductCardBackground {...props.fields} />
          <ul className="d-flex list-unstyled mt-auto">
            {props.fields.CardHighlights &&
              props.fields.CardHighlights.map((highlightitem, highlightindex) =>
                highlightindex === 0 ? (
                  <li key={`highlightitem-${highlightindex}`} className="me-auto">
                    <img
                      src={highlightitem.HighlightIconImageUrl}
                      alt={highlightitem.HighlightIconImageAlt}
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                ) : (
                  <li
                    key={`highlightitem-${highlightindex}`}
                    className="d-flex align-items-center me-3"
                  >
                    <img
                      src={highlightitem.HighlightIconImageUrl}
                      alt={highlightitem.HighlightIconImageAlt}
                      className="bi me-2"
                      width="16"
                      height="16"
                    />
                    <small>{highlightitem.HighlightText}</small>
                  </li>
                )
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestCardHighlight;