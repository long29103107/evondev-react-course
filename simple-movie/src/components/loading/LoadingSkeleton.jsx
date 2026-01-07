import React from "react";
import PropTypes from "prop-types";

const LoadingSkeleton = ({width, height, radius, className}) => {
  return (
    <div className={`skeleton ${className}`} style={{width, height, borderRadius: radius}}>
    </div>
  );
};

LoadingSkeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
};

export default LoadingSkeleton;