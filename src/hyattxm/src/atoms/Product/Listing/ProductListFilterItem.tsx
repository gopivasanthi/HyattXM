import React from 'react';

interface ProductListFilterItemProps {
  filterIdentifier: string;
  filterTypeIdentifier: string;
  filterItemValue: string;
  onRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProductListFilterItem: React.FC<ProductListFilterItemProps> = ({
  filterIdentifier,
  filterTypeIdentifier,
  filterItemValue,
  onRadioChange,
}): JSX.Element => {
  return (
    <div>
      <input
        type="radio"
        id={filterIdentifier}
        name={filterTypeIdentifier}
        value={filterItemValue}
        onChange={(event) => onRadioChange(event)}
      />
      <label htmlFor={filterTypeIdentifier}>{filterItemValue}</label>
    </div>
  );
};

export default ProductListFilterItem;
