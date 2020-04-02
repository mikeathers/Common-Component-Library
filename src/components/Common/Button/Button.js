import React from "react";
import { Button } from "semantic-ui-react";

import "./Button.scss";

const sButton = props => {
  const {
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    ...defaultProps
  } = props;

  const style = {
    backgroundColor: props.type === "danger" && "#ea5a5a",
    color: "#fff",
    marginBottom: `${props.marginBottom}px`,
    marginTop: `${props.marginTop}px`,
    marginRight: `${props.marginRight}px`,
    marginLeft: `${props.marginLeft}px`,
    width: props.width
  };

  return <Button style={style} {...defaultProps} size="small" />;
};

export { sButton as Button };
