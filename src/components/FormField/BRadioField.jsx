import React from "react";

const BRadioField = ({ title, name, data, ...others }) => {
  return (
    <div className="mb-3">
      <div className="d-flex">
        <span className>{title}</span>
        {data?.map((item) => {
          return (
            <div className="form-check mx-3" key={item.id}>
              <input
                className="form-check-input"
                name={name}
                id={item.label}
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
  title: "Gender",
  type: "radio",
  name: "gender",
};

export default BRadioField;
