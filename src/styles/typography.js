const numberFont = [
  'var(--font-inter)',
  'var(--spoqa-han-sans-neo)',
  'var(--font-noto-sans-kr)',
  'serif',
];

module.exports = {
  typography: {
    fontFamily: {
      default: [
        'var(--spoqa-han-sans-neo)',
        'var(--font-inter)',
        'var(--font-noto-sans-kr)',
        'Helvetica',
        'Malgun Gothic',
        'Apple SD Gothic Neo',
        'AppleGothic',
        'Dotum',
        'Arial',
        'Tahoma',
        'sans-serif',
      ],
      nanumGothic: ['var(--nanum-gothic)'],
      number: numberFont,
    },
    fontSize: {
      12: '12px',
      13: '13px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },

    lineHeight: {
      100: '100%',
      130: '130%',
      160: '160%',
      240: '240%',
      1: '1',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    textDecorationThickness: {
      auto: 'auto',
      'from-font': 'from-font',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    textUnderlineOffset: {
      auto: 'auto',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    textIndent: ({ theme }) => ({
      ...theme('spacing'),
    }),
    textOpacity: ({ theme }) => theme('opacity'),
  },
  textStyle: {
    // HEADER
    '.text-style-h1': {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '130%',
      letterSpacing: '-0.4px',
    },
    '.text-style-h1-sm': {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '130%',
      letterSpacing: '-0.4px',
    },
    '.text-style-h2': {
      fontSize: '22px',
      fontWeight: 500,
      lineHeight: '130%',
      letterSpacing: '-0.4px',
    },
    '.text-style-h2-sm': {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '130%',
      letterSpacing: '-0.4px',
    },
    '.text-style-h3': {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '150%',
      letterSpacing: '-0.4px',
    },
    '.text-style-h3-sm': {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '150%',
      letterSpacing: '-0.4px',
    },
    '.text-style-h4': {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '150%',
      letterSpacing: '-0.4px',
    },
    '.text-style-h4-sm': {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '150%',
      letterSpacing: '-0.4px',
    },
    '.text-style-h5': {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '100%',
      letterSpacing: '-0.4px',
    },
    '.text-style-h5-sm': {
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '100%',
      letterSpacing: '0',
    },
    '.text-style-h6': {
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '100%',
      letterSpacing: '0',
    },
    '.text-style-h6-sm': {
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: '100%',
      letterSpacing: '0',
    },

    // SUBTITLE
    '.text-style-subtitle-md': {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '150%',
      letterSpacing: '-0.2px',
    },
    '.text-style-subtitle-sm': {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '150%',
      letterSpacing: '-1px',
    },

    // PARAGRAPH
    '.text-style-p-md': {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '160%',
    },
    '.text-style-p-md-bold': {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '160%',
    },
    '.text-style-p-md-underline': {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '160%',
      textDecoration: 'underline',
    },
    '.text-style-p-md-bold-underline': {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '160%',
      textDecoration: 'underline',
    },
    '.text-style-p-md-strikethrough': {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '100%',
      textDecoration: 'line-through',
    },
    '.text-style-p-sm': {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '160%',
      letterSpacing: '0',
    },
    '.text-style-p-sm-bold': {
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '160%',
      letterSpacing: '0',
    },
    '.text-style-p-sm-underline': {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '160%',
      letterSpacing: '0',
      textDecoration: 'underline',
    },
    '.text-style-p-sm-list-underline': {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '240%',
      letterSpacing: '0',
      textDecoration: 'underline',
    },
    '.text-style-p-xsm': {
      fontSize: '13px',
      fontWeight: 500,
      lineHeight: '160%',
      letterSpacing: '0',
    },
    '.text-style-p-xsm-underline': {
      fontSize: '13px',
      fontWeight: 500,
      lineHeight: '160%',
      letterSpacing: '0',
      textDecoration: 'underline',
    },
    '.text-style-p-xxsm': {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '160%',
      letterSpacing: '0',
    },

    // BUTTON
    '.text-style-btn-xxl': {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '100%',
    },
    '.text-style-btn-xl': {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '100%',
      letterSpacing: '-0.4px',
    },
    '.text-style-btn-lg': {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '100%',
    },
    '.text-style-btn-md-bold': {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '100%',
    },
    '.text-style-btn-md': {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '100%',
    },
    '.text-style-btn-sm-bold': {
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '100%',
      letterSpacing: '0',
    },
    '.text-style-btn-sm': {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '100%',
      letterSpacing: '0',
    },
    '.text-style-btn-xsm': {
      fontSize: '13px',
      fontWeight: 700,
      lineHeight: '100%',
      letterSpacing: '0',
    },
    '.text-style-btn-xxsm': {
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: '100%',
      letterSpacing: '0',
    },

    // NUMBER
    '.text-style-num-xxl': {
      fontFamily: numberFont.toString(),
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '100%',
    },
    '.text-style-num-xl': {
      fontFamily: numberFont.toString(),
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '100%',
    },
    '.text-style-num-lg': {
      fontFamily: numberFont.toString(),
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '100%',
    },
    '.text-style-num-md': {
      fontFamily: numberFont.toString(),
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '150%',
    },
    '.text-style-num-sm': {
      fontFamily: numberFont.toString(),
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '100%',
      letterSpacing: '0',
    },
    '.text-style-num-xsm': {
      fontFamily: numberFont.toString(),
      fontSize: '13px',
      fontWeight: 500,
      lineHeight: '100%',
      letterSpacing: '0',
    },

    // CAPTION
    '.text-style-caption': {
      fontSize: '13px',
      fontWeight: 500,
      lineHeight: '100%',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
    },
    '.text-style-caption-lg': {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '100%',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
    },
  },
  textEllipsis: {
    '.text-ellipsis-1': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '-webkitLineClamp': '1',
      display: '-webkit-box',
      '-webkitBoxOrient': 'vertical',
    },
    '.text-ellipsis-2': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '-webkitLineClamp': '2',
      display: '-webkit-box',
      '-webkitBoxOrient': 'vertical',
    },
    '.text-ellipsis-3': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '-webkitLineClamp': '3',
      display: '-webkit-box',
      '-webkitBoxOrient': 'vertical',
    },
  },
};
