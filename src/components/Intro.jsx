//import Image from "next/image"
import {
  Box,
  Text,
  Spacer,
  Flex,
  useColorMode,
  Button,
  Image,
  Container,
  Heading,
  Center,
} from "@chakra-ui/react"
import { GrUpdate } from "react-icons/gr"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { GiTalk } from "react-icons/gi"
import styles from "../styles/Home.module.scss"

import { MdBuild, MdCall } from "react-icons/md"

const IntroText = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  //        className={styles.intro}
  return (
    <Flex
      className={styles.introText}
      display="block"
      minWidth="60vw"
      left="0"
      whiteSpace={"nowrap"}
    >
      <Heading className={styles.accentText} fontWeight={"light"} fontSize="32">
        Hi, my name is
      </Heading>
      <Heading fontWeight={"black"} fontSize="5vw" display={"inline-block"}>
        Renan Pereira.aaaaaaaaaaaaaaaaaaaaaa
      </Heading>
      <Heading textAlign="right">
        <Heading fontSize="28" fontWeight={"light"}>
          But my friends call me{" "}
          <Heading
            className={styles.accentText}
            fontWeight={"light"}
            display="inline-flex"
          >
            Duke
          </Heading>{" "}
          for some reason
        </Heading>
        <Heading color="#e2d7d5" fontSize="24">
          and this font matches my hair color
        </Heading>
      </Heading>
      <Heading paddingTop={"24"} fontSize="36px">
        Have I mentioned that I love to build web things?
      </Heading>
      <Button
        variant="solid"
        className={styles.letsTalk}
        size="lg"
        rightIcon={<GiTalk />}
      >
        Let's talk
      </Button>
    </Flex>
  )
}

const IntroImage = () => {
  return (
    <Flex
      bg="blackAlpha.200"
      minWidth="40vw"
      right="0"
      bottom="0"
      alignItems={"center"}
    >
      <Box position="relative">
        <Box>
          <Image
            className={styles.bgPhoto}
            src="me.png"
            alt="a handsome developer"
            objectFit="cover"
          />
        </Box>
        <Box
          className={styles.bgArrow}
          position="absolute"
          width="10vw"
          top="30px"
          right="30px"
        >
          <Image
            src="monophy.gif"
            alt="a shaky pointing arrow"
            objectFit="contain"
          />
        </Box>
        <Box position="absolute" width="inherit" top="0" right="0">
          <Text className={styles.bgArrowText}>
            hey look,
            <br />
            that's me!
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}

const Intro = () => {
  return (
    <>
      <Flex
        width="calc(100vw-200px)"
        height={"90vh"}
        alignItems={"stretch"}
        overflow="hidden"
      >
        <IntroText />
        <IntroImage />
      </Flex>
    </>
  )
}

export default Intro

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
/*

<Box>
      <Box>
        <Container
          bg="red"
          position="absolute"
          bottom="100px"
          right="100px"
          overflow="hidden"
        >
          <Container minW="10vw">
            <Image
              className={styles.bgArrow}
              src="monophy.gif"
              alt="heyguys"
              boxSize="30vh"
              position="absolute"
              top="10%"
              left="70%"
            />
            <Container
              className={styles.bgArrowText}
              position="absolute"
              top="10%"
              left="80%"
            >
              <Container
                minW="6vw"
                className={styles.kekw}
                fontSize="1.5vw"
                position="absolute"
                left="20%"
              >
                hey, look
                <br />
                thats me!
              </Container>
            </Container>
          </Container>
        </Container>
      </Box>
    </Box>
    */
