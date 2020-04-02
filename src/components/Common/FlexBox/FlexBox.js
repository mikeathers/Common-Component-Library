import React from "react";
import "./FlexBox.scss";

const FlexBox = props => {
  const style = {
    display: "flex",
    width: `${props.width}%`,
    flexDirection: props.flexDirection,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    marginTop: `${props.marginTop}px`,
    marginBottom: `${props.marginBottom}px`,
    marginRight: `${props.marginRight}px`,
    marginLeft: `${props.marginLeft}px`
  };
  return <div style={style}>{props.children}</div>;
};
export { FlexBox };
