import React, { useState } from 'react';

import { TestProductCardFields } from 'src/types/TestProductCardFields';
import TestProductCardModel from './TestProductCardModel';

export const TestProductCardBackground = (props: TestProductCardFields): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    console.log('Opening modal');
    setShowModal(true);
  };

  const handleClose = () => {
    console.log('Closing modal');
    setShowModal(false);
  };

  return (
    <div>
      {/* <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" onClick={handleOpen}>
        {props.productCardTitle.value}
      </h3> */}
      <button className="btn btn-primary" onClick={handleOpen}>
        {props.productCardTitle.value}
      </button>
      <TestProductCardModel showModal={showModal} handleClose={handleClose} />
    </div>
  );
};

export default TestProductCardBackground;
