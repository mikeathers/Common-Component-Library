import React from "react";
import { Transition } from "react-spring";
import "./DropDownMessage.scss";

const DropDownMessage = props => {
  const style = {
    marginBottom: `${props.marginBottom}px`,
    marginTop: `${props.marginTop}px`,
    marginRight: `${props.marginRight}px`,
    marginLeft: `${props.marginLeft}px`
  };
  return (
    <div style={style} className="dropdown-message">
      <Transition
        items={props.show}
        from={{ opacity: 0, transform: "translate3d(0,0px,0)" }}
        enter={{ opacity: 1, transform: "translate3d(0,5px,0)" }}
        leave={{ opacity: 0 }}
        delay={300}
      >
        {show => show && (styles => <div style={styles}>{props.children}</div>)}
      </Transition>
    </div>
  );
};

export { DropDownMessage };
