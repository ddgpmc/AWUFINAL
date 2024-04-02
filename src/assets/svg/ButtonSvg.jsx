const ButtonSvg = (white) => (
  <>
    <svg
      className="absolute top-0 left-0"
      width="15"
      height="44"
      viewBox="0 0 21 44"
    >
      <rect
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-left)"} // mentioned in ButtonGradient.jsx
        strokeWidth="2"
        x="0"
        y="0"
        width="15"
        height="44"
      />
    </svg>
    <svg
      className="absolute top-0 left-[1.3rem] w-[calc(100%-2.625rem)]"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      fill={white ? "white" : "none"}
    >
      <rect
        fill={white ? "white" : "url(#btn-top)"} // mentioned in ButtonGradient.jsx
        x="0"
        y="0"
        width="100"
        height="44"
      />
    </svg>
    <svg
      className="absolute top-0 right-[0.05rem]"
      width="15"
      height="44"
      viewBox="0 0 21 44"
    >
      <rect
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-right)"} // mentioned in ButtonGradient.jsx
        strokeWidth="2"
        x="0"
        y="0"
        width="15"
        height="44"
      />
    </svg>
  </>
);

export default ButtonSvg;
