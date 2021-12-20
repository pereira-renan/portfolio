import {
  Box,
  Text,
  Spacer,
  Center,
  Flex,
  HStack,
  Image,
} from "@chakra-ui/react"
import Link from "next/link"
import styles from "../styles/Home.module.scss"

export default function Navbar() {
  return (
    <Box>
      <Center className={styles.navbar}>
        <Flex fontWeight={"black"}>
          <Link as="/" href="/home" passHref>
            <Image
              src="/favicon.ico"
              minHeight={"5vh"}
              maxHeight={"7vh"}
              cursor={"pointer"}
            />
          </Link>
        </Flex>
        <Spacer />
        <Box>
          <HStack spacing={12} className={styles.navlinks}>
            <Link as="/" href="/contacts" passHref>
              <a>Contact</a>
            </Link>
          </HStack>
        </Box>
      </Center>
    </Box>
  )
}

/*

            <Link as="/" href="/about" passHref>
              <a>About</a>
            </Link>
            <Link as="/" href="/projects" passHref>
              <a>Projects</a>
            </Link>
            */
