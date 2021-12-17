import components from "./components"
import foundations from "./foundations"
import styles from "./styles"

const direction = "ltr"

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
  cssVarPrefix: "chakra",
}

export const customTheme = {
  direction,
  ...foundations,
  components,
  styles,
  config,
}

export default customTheme
