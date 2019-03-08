import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background: #82a2ac;
  color: #facea3;
  font-size: 20px;
  text-align: left;
  z-index: 100;
  font-size: 2em;
  font-weight: bold;
  text-transform: uppercase;
  overflow: hidden;
  > button {
    cursor: pointer;
    position: absolute;
    right: 0.5em;
    font-size: 1em;
    font-weight: bold;
    border: none;
    background: none;
  }
  > ul {
    margin: 0;
    margin-top: 1em;
    padding: 0 1em;
    list-style: none;
    will-change: transform, opacity;
    > div {
      overflow: hidden;
    }
  }
`;

export { Container };
