import { ProductSpecifics } from 'components/Products/ProductSpecifics';
import React, { useState } from 'react';
import { ProductCardFields } from 'src/types/Product/ProductCard/ProductCardFields';

export const ProductCardTitle = (props: ProductCardFields): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    console.log('Opening Modal');
    setShowModal(true);
  };

  const handleClose = () => {
    console.log('Closing Modal');
    setShowModal(false);
  };

  if (props.productCardTitle.value === '') {
    return <h5 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Title not available</h5>;
  } else {
    return (
      <div>
        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" onClick={handleOpen}>
          {props.productCardTitle.value}
        </h3>
        <ProductSpecifics handleClose={handleClose} ProductName={props.productCardName} showModal={showModal} />
      </div>
    );
  }
};

export default ProductCardTitle;
