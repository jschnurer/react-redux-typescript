import React from "react";

interface InlineSpinnerProps {
  isCenterBlock?: boolean,
}

const InlineSpinner: React.FunctionComponent<InlineSpinnerProps> = (props) => {
  let img = <img src="/pulse-1s-200px.svg" alt="Loading..." />;

  if (props?.isCenterBlock) {
    return <div style={{textAlign: "center"}}>
      {img}
    </div>;
  } else {
    return img;
  }
}

export default InlineSpinner;