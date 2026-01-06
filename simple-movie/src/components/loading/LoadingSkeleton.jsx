import React from "react";
import PropTypes from "prop-types";

const LoadingSkeleton = (props) => {
  return (
    <div className={`skeleton ${props.className}`}>
      style=
      {{
        width: props.width || "100%",
        height: props.height || "100%",
        borderRadius: props.radius || "0",
      }}
    </div>
  );
};

LoadingSkeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
};

export default LoadingSkeleton;
