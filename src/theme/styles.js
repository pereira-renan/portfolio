import { mode } from "@chakra-ui/theme-tools"

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.800", "whiteAlpha.900")(props),
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
      h: "100vh",
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
  }),
}

export default styles
