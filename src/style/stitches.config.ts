import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      "--gray-100": "rgba(242, 242, 242, 1)",
      "--gray-200":" rgba(217, 217, 217, 1)",
      "--gray-300": "rgba(128, 128, 128, 1)",
      "--gray-400": "rgba(51, 51, 51, 1)",
      "--gray-500": "rgba(38, 38, 38, 1)",
      "--gray-600": "rgba(26, 26, 26, 1)",
      "--gray-700": "rgba(13, 13, 13, 1)",
      "--purple": "rgba(130, 132, 250, 1)",
      "--purple-dark": "rgba(94, 96, 206, 1)",
      "--blue": "rgba(78, 168, 222, 1)",
      "--blue--dark": "rgba(30, 111, 159, 1)",
      "--danger": "rgba(226, 88, 88, 1)",
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value:any) => ({ marginLeft: value, marginRight: value }),
  },
});
