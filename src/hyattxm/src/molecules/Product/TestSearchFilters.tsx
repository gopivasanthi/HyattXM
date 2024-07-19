import React from 'react';
import TestFilterItem from 'src/atoms/Product/TestAtoms/TestFilterItem';
import { TestSearchFiltersProps } from 'src/types/Product/TestSearchFiltersProps';


export const TestSearchFilters = (props: TestSearchFiltersProps): JSX.Element => {
  return (
    <div className="filters">
      <h5>Filters</h5>
      {/* Add your filter components here */}
      <div className="filter-group">
        <h6>Insurance Scope</h6>
        {props.searchProductScope.results &&
          props.searchProductScope.results.map((scopeitem, scopeindex) => (
            <TestFilterItem
              key={`scopeitem-${scopeindex}`}
              filterIdentifier={scopeitem.scopeName.value}
            />
          ))}
      </div>
      <div className="filter-group">
        <h6>Insurance Type</h6>
        {props.searchProductScope.results &&
          props.searchProductType.results.map((typeitem, typeindex) => (
            <TestFilterItem
              key={`typeitem-${typeindex}`}
              filterIdentifier={typeitem.insuranceTypeName.value}
            />
          ))}
      </div>
      {/* Add more filters as needed */}
    </div>
  );
};
export default TestSearchFilters;
