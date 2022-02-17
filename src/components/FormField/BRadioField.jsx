import React from "react";

const BRadioField = ({ title, name, data, ...others }) => {
  return (
    <div className="mb-3">
      <span className>{title}</span>
      <div className="d-flex justify-content-start">
        {data?.map((item) => {
          const { id, label } = item;
          return (
            <div className="form-check mx-1 my-1" key={id}>
              <input
                className="form-check-input"
                name={name}
                value={label}
                id={label}
                {...others}
              />
              <label className="form-check-label" htmlFor={item.label}>
                {item.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

BRadioField.defaultProps = {
  // title: "Gender",
  type: "radio",
  name: "gender",
};

export default BRadioField;
