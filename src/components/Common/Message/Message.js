import React from "react";
import "./Message.scss";
const Message = props => {
  const { show, error, message, marginRight, marginLeft, marginTop } = props;
  const classStyle = error ? "message__error" : "message__success";
  const style = {
    marginRight: `${marginRight}px`,
    marginLeft: `${marginLeft}px`,
    marginTop: `${marginTop}px`,
    display: "flex",
    justifyContent: props.justifyContent,
    width: `${props.width}%`
  };
  return show ? (
    <div style={style} className="message" id={props.id}>
      <p className={classStyle}>
        {message !== undefined ? message : "Task completed successfully."}
      </p>
    </div>
  ) : null;
};

export { Message };
