import React, { Fragment } from "react";

const ButtonAdd = ({ onClick, title, icon, variant, ...props }) => {
  return (
    <Fragment>
      <div className={`btn btn-${variant}`} onClick={onClick} {...props}>
        {title}
        <span className="px-2">
          {/* <i className="fa fa-plus-circle" aria-hidden="true" /> */}
          <i className={`fa fa-${icon}`} aria-hidden="true" />
        </span>
      </div>
    </Fragment>
  );
};

ButtonAdd.defaultProps = {
  variant: "dark",
};

export default ButtonAdd;
