import { styled } from "styled-components";

export const Svg = styled.svg`
  position: absolute;
  height: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 60%);
  transform: scale(0);
  fill: #1f1e2a;
`;

const OvalSvg = () => {
  // Filter: https://css-tricks.com/gooey-effect/

  return (
    <Svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="50" rx="60" ry="50" />
    </Svg>
  );
};

export default OvalSvg;
