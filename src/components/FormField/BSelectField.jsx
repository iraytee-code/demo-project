import React, { Fragment } from "react";

const BSelectField = ({ data, name, onChange, ...rest }) => {
  return (
    <div className="mb-3">
      <select
        className="form-select form-select-sm"
        name={name}
        onChange={onChange}
        {...rest}
      >
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
            <option value={item.Label}>{item.Label}</option>
          </Fragment>
        ))}
      </select>
    </div>
  );
};

// BSelectField.defaultProps = {
//   data: [],
// };
export default BSelectField;
