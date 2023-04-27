import styled from 'styled-components';

export const Bar = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #000;
  background: #222;
  z-index: 1000;
`;

export const Circle = styled.svg`
  position: relative;
  width: 150px;
  height: 150px;
  z-index: 1000;
  circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: #191919;
    stroke-width: 10;
    stroke-linecap: round;
    transform: translate(5px, 5px);
  }
`;

export const Percent = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  z-index: 1000;
  h2 {
    color: #777;
    font-weight: 700;
    font-size: 40px;
    transition: 0.5s;
  }
`;
