import React from 'react';

export const TestProductSpecifications = (): JSX.Element => {
  return (
    <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
      <div className="list-group">
        <label className="list-group-item d-flex gap-3">
          <input
            className="form-check-input flex-shrink-0"
            type="checkbox"
            value=""
            defaultChecked
            style={{ fontSize: '1.375em' }}
          />
          <span className="pt-1 form-checked-content">
            <strong>Finish sales report</strong>
            <small className="d-block text-body-secondary">
              <svg className="bi me-1" width="1em" height="1em">
                <use xlinkHref="#calendar-event" />
              </svg>
              1:00–2:00pm
            </small>
          </span>
        </label>
        <label className="list-group-item d-flex gap-3">
          <input
            className="form-check-input flex-shrink-0"
            type="checkbox"
            value=""
            style={{ fontSize: '1.375em' }}
          />
          <span className="pt-1 form-checked-content">
            <strong>Weekly All Hands</strong>
            <small className="d-block text-body-secondary">
              <svg className="bi me-1" width="1em" height="1em">
                <use xlinkHref="#calendar-event" />
              </svg>
              2:00–2:30pm
            </small>
          </span>
        </label>
        <label className="list-group-item d-flex gap-3">
          <input
            className="form-check-input flex-shrink-0"
            type="checkbox"
            value=""
            style={{ fontSize: '1.375em' }}
          />
          <span className="pt-1 form-checked-content">
            <strong>Out of office</strong>
            <small className="d-block text-body-secondary">
              <svg className="bi me-1" width="1em" height="1em">
                <use xlinkHref="#alarm" />
              </svg>
              Tomorrow
            </small>
          </span>
        </label>
        <label className="list-group-item d-flex gap-3 bg-body-tertiary">
          <input
            className="form-check-input form-check-input-placeholder bg-body-tertiary flex-shrink-0 pe-none"
            disabled
            type="checkbox"
            value=""
            style={{ fontSize: '1.375em' }}
          />
          <span className="pt-1 form-checked-content">
            <span contentEditable="true" className="w-100">
              Add new task...
            </span>
            <small className="d-block text-body-secondary">
              <svg className="bi me-1" width="1em" height="1em">
                <use xlinkHref="#list-check" />
              </svg>
              Choose list...
            </small>
          </span>
        </label>
      </div>
    </div>
  );
};

export default TestProductSpecifications;
