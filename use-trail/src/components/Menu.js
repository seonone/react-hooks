import React, { useState } from "react";
import { useSpring, useTrail, animated } from "react-spring";
import AnimatedList from "./AnimatedList";
import { Container } from "../styles/MenuStyles";

const items = ["Item one", "Item two", "Item three"];

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(0);
  const containerStyle = useSpring({ height: menuOpen ? "100vh" : "0vh" });
  return (
    <div>
      <br />
      <button onClick={() => setMenuOpen(!menuOpen)}>Open</button>
      <Container as={animated.div} style={containerStyle}>
        <button onClick={() => setMenuOpen(false)}>x</button>
        <AnimatedList items={items} menuOpen={menuOpen} />
      </Container>
    </div>
  );
};

export default Menu;
