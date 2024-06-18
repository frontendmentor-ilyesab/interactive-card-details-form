import { extendTheme } from "@chakra-ui/react";

const theme = {
  styles: {
    global: {
      body: {
        fontWeight: "500",
        fontSize: "lg",
      }
    }
  },
  colors: {
    white: "hsl(0, 0%, 100%)",
    violet: {
      light: "hsl(270, 3%, 87%)",
      dark: "hsl(279, 6%, 55%)",
      black: "hsl(278, 68%, 11%)",
      base: "hsl(278, 68%, 50%)"
    },
    red: "hsl(0, 100%, 66%)",
    gradient: {
      from: "hsl(249, 99%, 64%)",
      to: "hsl(278, 94%, 30%)",
    },
  },
  fonts: {
    body: "Space Grotesk, sans-serif",
    heading: "Space Grotesk, sans-serif",
    mono: "Space Grotesk, sans-serif",
  },
  shadows: {
    cardShadow: "2px 30px 35px 7px rgba(0,0,0,0.15)"
  },
  breakpoints: {
      base: '0px',
      sm: '375px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
  }
};

export default extendTheme(theme);
