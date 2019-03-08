import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedTitle = props => {
  const aniStyle = useSpring({
    opacity: 1,
    color: "black",
    from: { opacity: 0 },
    config: { duration: 1000 }
  });
  return <animated.h2 style={aniStyle}>{props.title}</animated.h2>;
};

export default AnimatedTitle;
