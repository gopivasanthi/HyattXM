import React from 'react';

export const TestProductColors = (): JSX.Element => {
  return (
    <div className="container marketing">
      {/* Three columns of text below the carousel */}
      <div className="row">
        <div className="col-lg-4">
          <svg
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
          </svg>
          <h2 className="fw-normal">Heading</h2>
          <p>
            Some representative placeholder content for the three columns of text below the
            carousel. This is the first column.
          </p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details »
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <svg
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
          </svg>
          <h2 className="fw-normal">Heading</h2>
          <p>
            Another exciting bit of representative placeholder content. This time, we have moved on
            to the second column.
          </p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details »
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <svg
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
          </svg>
          <h2 className="fw-normal">Heading</h2>
          <p>And lastly this, the third column of representative placeholder content.</p>
          <p>
            <a className="btn btn-secondary" href="#">
              View details »
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestProductColors;
