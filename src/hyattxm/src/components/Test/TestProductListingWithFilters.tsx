import React from 'react';
import TestProductListResults from 'src/molecules/TestProductListResults';
import TestProductScopeFilters from 'src/molecules/TestProductScopeFilters';
import TestProductTypeFilters from 'src/molecules/TestProductTypeFilters';

export const Default = (): JSX.Element => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          {/* Left Sidebar - Filters */}
          <div className="filters">
            <h5>Filters</h5>
            <TestProductTypeFilters />
            <TestProductScopeFilters />
          </div>
        </div>
        <div className="col-md-9">
          {/* Right Sidebar - Cards */}
          <TestProductListResults />
        </div>
      </div>
    </div>
  );
};
