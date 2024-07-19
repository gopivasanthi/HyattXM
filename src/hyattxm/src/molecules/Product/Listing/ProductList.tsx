import React from 'react';
import ProductListItemCard from 'src/atoms/Product/Listing/ProductListItemCard';
import { ProductListItemCardFields } from 'src/types/Product/Listing/ProductListItemCardFields';

interface ProductListProps {
  results: Array<ProductListItemCardFields>;
}

export const ProductList: React.FC<ProductListProps> = ({ results }): JSX.Element => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {results &&
        results.map((resultitem, resultindex) => (
          <ProductListItemCard key={`resultitem-${resultindex}`} {...resultitem} />
        ))}
    </div>
  );
};

export default ProductList;
