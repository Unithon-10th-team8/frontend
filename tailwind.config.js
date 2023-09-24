const scollbarPlugin = require("tailwind-scrollbar");
const { defaultColors, colorConfig } = require("./src/styles/colors");
const {
  typography,
  textStyle,
  textEllipsis,
} = require("./src/styles/typography");
const screens = require("./src/styles/screens");
const layouts = require("./src/styles/layouts");
const border = require("./src/styles/border");
const background = require("./src/styles/background");
const effects = require("./src/styles/effects");
const animation = require("./src/styles/animation");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.ts", "./src/**/*.tsx"],
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    backdropOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
  },
  theme: {
    extend: {
      keyframes: {
        intro: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-900px)" },
        },
      },
      animation: {
        rolling: "intro 30000ms linear infinite",
      },
    },
    screens,
    colors: defaultColors,
    ...animation,
    ...colorConfig,
    ...layouts,
    ...background,
    ...border,
    ...effects,
    ...typography,
    container: {},
    content: {
      none: "none",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      help: "help",
      "not-allowed": "not-allowed",
      none: "none",
      "context-menu": "context-menu",
      progress: "progress",
      cell: "cell",
      crosshair: "crosshair",
      "vertical-text": "vertical-text",
      alias: "alias",
      copy: "copy",
      "no-drop": "no-drop",
      grab: "grab",
      grabbing: "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out",
    },
  },
  plugins: [
    ({ addUtilities, addVariant }) => {
      addUtilities({
        ...textStyle,
        ...textEllipsis,
        "clip-rect-0": {
          clip: "rect(0px, 0px, 0px, 0px)",
        },
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".keep-all": { "word-break": "keep-all" },
        ".h-available": {
          height: "100%",
          "min-height": "-moz-available",
        },
        ".vertex": {
          position: "absolute",
          top: "-6px",
          right: "12px",
          "z-index": "-1",
          width: "14px",
          height: "14px",
          "&:before": {
            content: '""',
            display: "block",
            visibility: "visible",
            right: "12px",
            height: "10px",
            width: "10px",
            transform: "rotate(-45deg)",
            "transform-origin": "center",
            "border-top": "1px solid rgb(var(--colors-grey-70))",
            "border-right": "1px solid rgb(var(--colors-grey-70))",
            "background-color": "rgb(var(--colors-input-bg))",
          },
        },
      });

      addVariant("children", "& > *");
    },
    scollbarPlugin,
  ],
};
