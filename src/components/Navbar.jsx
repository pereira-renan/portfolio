import { Box, Text, Spacer, Center, Flex, HStack } from "@chakra-ui/react"
import Link from "next/link"
import styles from "../styles/Home.module.scss"

export default function Navbar() {
  return (
    <Box>
      <Center className={styles.navbar}>
        <Flex fontWeight={"black"}>
          <Link as="/" href="/home">
            <Text as="a" className={styles.navlinksLogo}>
              RP
            </Text>
          </Link>
        </Flex>
        <Spacer />
        <Box>
          <HStack spacing={12} className={styles.navlinks}>
            <Link as="/" href="/about">
              <a>About</a>
            </Link>
            <Link as="/" href="/projects">
              <a>Projects</a>
            </Link>
            <Link as="/" href="/contacts">
              <a>Contact</a>
            </Link>
          </HStack>
        </Box>
      </Center>
    </Box>
  )
}
