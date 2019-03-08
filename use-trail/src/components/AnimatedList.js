import React from "react";
import { useTrail, animated } from "react-spring";

const AnimatedList = props => {
  const { menuOpen, items } = props;
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(items.length, {
    config,
    opacity: menuOpen ? 1 : 0,
    x: menuOpen ? 0 : 20,
    height: menuOpen ? 40 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });
  return (
    <ul>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.li
          key={index.toString()}
          className="nav-menu"
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
          }}
        >
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.li>
      ))}
    </ul>
  );
};

export default AnimatedList;
