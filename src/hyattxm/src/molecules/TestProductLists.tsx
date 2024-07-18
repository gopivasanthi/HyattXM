import React from 'react';
import TestProductListItem from 'src/atoms/Product/TestAtoms/TestProductListItem';
import { TestProductListItemFields } from 'src/types/Product/TestProductListing/TestProductListItemFields';

interface TestProductListsProps {
  results: Array<TestProductListItemFields>;
}

export const TestProductLists = (props: TestProductListsProps): JSX.Element => {

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {props.results &&
          props.results.map((resultitem, resultindex) => (
            <TestProductListItem key={`resultitem-${resultindex}`} {...resultitem} />
          ))}
      </div>
    </div>
  );
};
