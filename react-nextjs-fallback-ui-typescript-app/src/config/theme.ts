import { createTheme } from '@mui/material/styles'
import '@fontsource/noto-sans-jp'

const theme = createTheme({
  // https://tailwindcss.com/docs/customizing-colors
  palette: {
    primary: {
      main: '#1d4ed8',
    },
    secondary: {
      main: '#0369a1',
    },
    info: {
      main: '#475569',
    },
    success: {
      main: '#059669',
    },
    error: {
      main: '#dc2626',
    },
    warning: {
      main: '#d97706',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        formControl: {
          // 移動をクリック時に動かないように固定
          position: 'static',
          transform: 'none',
          transition: 'none',
          // クリックを可能に
          pointerEvents: 'auto',
          cursor: 'pointer',
          // 幅いっぱいを解除
          display: 'inline',
          alignSelf: 'start',
          fontFamily: '"Noto Sans JP", sans-serif',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: '22px',
          marginBottom: '10px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // デフォルトだと、
          // ラベルをはみ出させるための小さなmarginがある
          marginTop: 0,
        },
        input: {
          paddingTop: '10px',
          paddingBottom: '8px',
          height: 'auto',
        },
        notchedOutline: {
          // デフォルトだと、 position が absolute、
          // ラベルをはみ出させるため上に少しの余白がある
          top: 0,
          legend: {
            // 内包された legend 要素によって、四角の左側の切り欠きが実現されているので、
            // 表示されないように。
            // (SCSS と同様にネスト記述が可能です。)
            display: 'none',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          // フォーム下部のテキスト、エラーメッセージ
          // お好みで左余白を無くしています。
          marginLeft: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          padding: '10px 20px',
          borderRadius: '12px',
          color: '#ffffff',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '17px',
          ':hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: 0,
        },

        // https://tailwindcss.com/docs/font-size
      },
    },
  },
  typography: {
    fontFamily: '"Noto Sans JP", sans-serif',
    h1: {
      fontSize: '1.5rem' /* 24px */,
      lineHeight: '2rem' /* 32px */,
    },
    h2: {
      fontSize: '1.25rem' /* 20px */,
      lineHeight: '1.75rem' /* 28px */,
    },
    h3: {
      fontSize: '1.125rem' /* 18px */,
      lineHeight: '1.75rem' /* 28px */,
    },
  },
})

export default theme
