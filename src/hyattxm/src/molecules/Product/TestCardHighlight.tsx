import React from 'react';

import TestProductCardBackground from 'src/atoms/Product/TestAtoms/TestProductCardBackground';
import TestProductCardHighlights from 'src/atoms/Product/TestAtoms/TestProductCardHighlights';
import TestProductCardModel from 'src/atoms/Product/TestAtoms/TestProductCardModel';
import TestProductCardPrimaryHighlights from 'src/atoms/Product/TestAtoms/TestProductCardPrimaryHighlights';
import { TestProductCardFields } from 'src/types/TestProductCardFields';

export const TestCardHighlight = (props: TestProductCardFields): JSX.Element => {
  return (
    <div className="col">
      <TestProductCardModel />
      <div
        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        style={{ backgroundImage: `url(${props.productCardBackgroundImageUrl.value})` }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <TestProductCardBackground {...props} />
          <ul className="d-flex list-unstyled mt-auto">
            {props.cardHighlights.CardHighlightItems &&
              props.cardHighlights.CardHighlightItems.map((highlightitem, highlightindex) =>
                highlightindex === 0 ? (
                  <TestProductCardPrimaryHighlights
                    key={`highlights-${highlightindex}`}
                    {...highlightitem}
                  />
                ) : (
                  <TestProductCardHighlights
                    key={`secondary-highlights-${highlightindex}`}
                    {...highlightitem}
                  />
                )
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestCardHighlight;
