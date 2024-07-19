import React from 'react';

interface TestFilterItemProps {
  filterIdentifier: string;
}

export const TestFilterItem: React.FC<TestFilterItemProps> = ({
  filterIdentifier,
}): JSX.Element => {
  return (
    <div>
      <label htmlFor={filterIdentifier}>{filterIdentifier}</label>
      <input type="checkbox" id={filterIdentifier} name={filterIdentifier} />
    </div>
  );
};

export default TestFilterItem;
