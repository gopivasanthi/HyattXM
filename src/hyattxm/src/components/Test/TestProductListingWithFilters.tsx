import React, { useState } from 'react';
import TestProductListResults from 'src/molecules/TestProductListResults';
import TestProductScopeFilters from 'src/molecules/TestProductScopeFilters';
import TestProductTypeFilters from 'src/molecules/TestProductTypeFilters';

export const Default = (): JSX.Element => {
  const [productType, setProductType] = useState<string | undefined>('');
  const [productScope, setProductScope] = useState<string | undefined>('');

  const convertToGUID = (str: string): string => {
    console.log(str);
    if (str.length !== 32) {
      throw new Error('Invalid input string length for GUID conversion.');
    }

    return `{${str.substring(0, 8)}-${str.substring(8, 12)}-${str.substring(
      12,
      16
    )}-${str.substring(16, 20)}-${str.substring(20)}}`;
  };

  const onCheckBoxProductTypeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(convertToGUID(event.target.id));
    setProductType(convertToGUID(event.target.id));
  };

  const onCheckBoxProductScopeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(convertToGUID(event.target.id));
    setProductScope(convertToGUID(event.target.id));
  };

  console.log(productType);
  console.log(productScope);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          {/* Left Sidebar - Filters */}
          <div className="filters">
            <h5>Filters</h5>
            <TestProductTypeFilters
              onCheckBoxSelect={(event) => onCheckBoxProductTypeSelect(event)}
            />
            <TestProductScopeFilters
              onCheckBoxSelect={(event) => onCheckBoxProductScopeSelect(event)}
            />
          </div>
        </div>
        <div className="col-md-9">
          {/* Right Sidebar - Cards */}
          <TestProductListResults
            selectedScopeFilter={productScope || ''}
            selectedTypeFilter={productType || ''}
          />
        </div>
      </div>
    </div>
  );
};
