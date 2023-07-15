const OvalSvg = () => {
  // Filter: https://css-tricks.com/gooey-effect/
  return (
    <svg
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        height: "50%",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,50%)",
      }}
    >
      <ellipse cx="100" cy="50" rx="100" ry="50" />
    </svg>
  );
};

export default OvalSvg;
