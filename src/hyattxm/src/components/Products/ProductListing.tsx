
import React, { useState } from 'react';
import ProductList from 'src/molecules/Product/Listing/ProductList';
import ProductListScopeFilter from 'src/molecules/Product/Listing/ProductListScopeFilter';
import ProductListTypeFilter from 'src/molecules/Product/Listing/ProductListTypeFilter';


export const Default = (): JSX.Element => {

  const [productType,setProductType] = useState<string>('');
  const [productScope,setProductScope] = useState<string>('');

  const onRadioChangeForType = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setProductType(convertToGUID(event.target.id));
  };

  const onRadioChangeForScope = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setProductScope(convertToGUID(event.target.id));
  };
  
  const convertToGUID = (str:string): string => {
    console.log(str);
    if(str.length != 32){
      throw new Error('Invalid Input string');
    }

    return `{${str.substring(0,8)}-${str.substring(8,12)}-${str.substring(12,16)}-${str.substring(16,20)}-${str.substring(20)}}`;
  };
  console.log(productScope);
  console.log(productType);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          {/* Left Sidebar - Filters */}
          <div className="filters">
            <h5>Filters</h5>
            {/* Add your filter components here */}
            <ProductListScopeFilter onRadioChange={(event) => onRadioChangeForScope(event)} />
            <ProductListTypeFilter onRadioChange={(event) => onRadioChangeForType(event)} />
            {/* Add more filters as needed */}
          </div>
        </div>
        <div className="col-md-9">
          {/* Right Sidebar - Cards */}
          <ProductList selectedScopeFilter={productScope || ''} selectedTypeFilter={productType || ''} />
        </div>
      </div>
    </div>
  );
};
