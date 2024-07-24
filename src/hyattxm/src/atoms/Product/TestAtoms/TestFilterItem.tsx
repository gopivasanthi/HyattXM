import React from 'react';

interface TestFilterItemProps {
  filterIdentifier: string;
  filterItemIdentifier: string;
  filterItemIdentifierValue: string;
  onCheckBoxSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TestFilterItem: React.FC<TestFilterItemProps> = ({
  filterIdentifier,
  filterItemIdentifier,
  filterItemIdentifierValue,
  onCheckBoxSelect,
}): JSX.Element => {
  return (
    <div>
      <input
        type="radio"
        id={filterItemIdentifierValue}
        onChange={(event) => onCheckBoxSelect(event)}
        name={filterItemIdentifier}
        value={filterIdentifier}
      />
      <label htmlFor={filterItemIdentifier}>{filterIdentifier}</label>
    </div>
  );
};

export default TestFilterItem;
