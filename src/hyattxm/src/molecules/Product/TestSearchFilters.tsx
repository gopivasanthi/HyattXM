import React from 'react';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

interface TestSearchFiltersProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

export const TestSearchFilters = (props: TestSearchFiltersProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <p>TestSearchFilters Component</p>
      </div>
    </div>
  );
};
export default TestSearchFilters;
