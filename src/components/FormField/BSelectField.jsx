import React, { Fragment } from "react";

const BSelectField = ({ data }) => {
  return (
    <div className="mb-3">
      <select className="form-select form-select-sm">
        <option value="S">State Of Origin</option>
        {/* {data &&
          data.map((item) => (
            <Fragment key={item.id}>
              <option value={item.value}>{item.label}</option>
            </Fragment>
          ))} */}
        {/* {data !== null &&
          data !== undefined &&
          data.lenght>0 &&
          data.map((item) => (
            <Fragment key={item.id}>
              <option value={item.value}>{item.label}</option>
            </Fragment>
          ))} */}
        {data?.map((item) => (
          <Fragment key={item.id}>
            <option value={item.value}>{item.Label}</option>
          </Fragment>
        ))}
      </select>
    </div>
  );
};

BSelectField.defaultProps = {
  data: [],
};
export default BSelectField;
