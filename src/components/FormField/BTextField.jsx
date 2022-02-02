import React from "react";
import PropTypes from "prop-types";

const BTextField = (props) => {
  const { type, ...rest } = props;
  return (
    <div className="mb-3">
      <input type={type} className="form-control form-control-sm" {...rest} />
    </div>
  );
};

BTextField.defaultProps = {
  type: PropTypes.string,
};

export default BTextField;
