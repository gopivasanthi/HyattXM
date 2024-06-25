import React from 'react';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

export type ProductSpeficiationCardFields = {

}



export const Default = (props: ProductSpeficiationCardFields): JSX.Element => {

  return (
    <div>
    <input className="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios1" value="" checked />
    <label className="list-group-item rounded-3 py-3" htmlFor="listGroupCheckableRadios1">
        First radio
        <span className="d-block small opacity-50">With support text underneath to add more detail</span>
    </label>
</div>
  );
};
