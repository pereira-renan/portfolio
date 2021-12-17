import {
  Box,
  Text,
  Spacer,
  Center,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  Button,
  Link,
} from "@chakra-ui/react"
import { GrUpdate } from "react-icons/gr"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { GiTalk } from "react-icons/gi"
import styles from "../styles/Home.module.scss"

const Navbar = () => {
  return (
    <Box>
      <Center className={styles.navbar}>
        <Box>
          <Text>
            Renan
            <br /> Pereira
          </Text>
        </Box>
        <Spacer />
        <Box>
          <HStack spacing={12} className={styles.navlinks}>
            <Link as="a" href="/">
              About
            </Link>
            <Link as="a" href="/">
              Projects
            </Link>
            <Link as="a" href="/">
              Contact
            </Link>
            <Link as="a" href="/">
              Socials
            </Link>
          </HStack>
        </Box>
      </Center>
    </Box>
  )
}

export default Navbar

/*

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box bg="red">
      <Center>
        <Box fontSize="3xl" color="gray.100" fontWeight="bold" opacity="87%">
          <Link href="/">
            <a>{process.env.title}</a>
          </Link>
        </Box>
        <Button variant="outline">
          <BsFillMoonFill />
        </Button>
        <Spacer />
        <IconButton
          icon={colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
          aria-label="Color mode switcher"
          onClick={toggleColorMode}
        >
          Switch Mode
        </IconButton>
      </Center>
    </Box>
  )
}*/
