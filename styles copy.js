import { extendTheme } from "@chakra-ui/react"
import { ButtonStyles as Button, TextStyles as Text } from "./components/button"
import { mode } from "@chakra-ui/theme-tools"

import { GlobalStyles as styles } from "./index"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}
const colors = {
  light: "#45857D",
  normal: "#167071",
  accent: "#FE6625",
  strong: "#FB9234",
  dark: "#003D59",
  darker: "#424951",
}

const customTheme = extendTheme({
  config,
  styles,
  colors: {
    light: "#45857D",
    normal: "#167071",
    accent: "#FE6625",
    strong: "#FB9234",
    dark: "#003D59",
    darker: "#424951",
  },
  components: {
    Button,
    Text,
  },
})

export default customTheme
/*
light	FFE4AF	F5B477	45857D	F4AB9A
normal	F6BE85	F59E72	167071	FFB47B
accent	FE8F24	E37352	FE6625	FF7C5E
strong	FC620C	B1584C	FB9234	
dark	EA8859	A56979	003D59	745285
darker	C0572D	5F4356	424951	331B4D
				
light	#FFE4AF	#F5B477	#45857D	#F4AB9A
normal	#F6BE85	#F59E72	#167071	#FFB47B
accent	#FE8F24	#E37352	#FE6625	#FF7C5E
strong	#FC620C	#B1584C	#FB9234	#
dark	#EA8859	#A56979	#003D59	#745285
darker	#C0572D	#5F4356	#424951	#331B4D
*/
/*  colors: {
    light: "#45857D",
    normal: "#167071",
    accent: "#FE6625",
    strong: "#FB9234",
    dark: "#003D59",
    darker: "#424951",
  },*/

/*  colors: {
    light: "#F5B477",
    normal: "#F59E72",
    accent: "#E37352",
    strong: "#B1584C",
    dark: "#A56979",
    darker: "#5F4356",
  },*/

/*colors: {
    light: "#FFE4AF",
    normal: "#FF6F91",
    accent: "#00C9A7",
    strong: "#FFC75F",
    dark: "#C34A36",
    darker: "#C0572D"
  },*/
