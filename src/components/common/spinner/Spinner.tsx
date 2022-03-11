import React from "react";
import spinnerImage from "media/Dual Ring-1s-200px.svg";

interface SpinnerProps {
  alt?: string,
}

const Spinner: React.FC<SpinnerProps> = ({
  alt,
}) =>
  <img
    alt={alt}
    src={spinnerImage}
  />;

export default Spinner;