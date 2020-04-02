import React from "react";
import { Transition } from "react-spring";

const FadeIn = ({ show, children }) => (
  <Transition
    items={show}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{
      opacity: 0
    }}
    delay={500}
  >
    {show => show && (props => <div style={props}>{children}</div>)}
  </Transition>
);

export { FadeIn };
