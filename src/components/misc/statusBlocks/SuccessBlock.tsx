import React from "react";
import "./SuccessBlock.scoped.css";

const SuccessBlock: React.FC = (props) =>
  <div className="success-block">{props.children}</div>;

export default SuccessBlock;