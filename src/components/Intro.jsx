import { Box, Text, Flex, useColorMode, Button, Image } from "@chakra-ui/react"
import { GiTalk } from "react-icons/gi"
import styles from "../styles/Home.module.scss"
import React, { useState, setState } from "react"
import Link from "next/link"

const IntroText = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  //        className={styles.intro}
  return (
    <Box className={styles.introText}>
      <Box className={styles.h2__accent} fontWeight={"light"}>
        Hi, my name is
      </Box>
      <Box className={styles.h1} fontWeight={"black"}>
        Renan Pereira
      </Box>
      <Box className={styles.h3} fontWeight={"light"}>
        But my friends call me{" "}
        <Box
          className={styles.h3__accent}
          fontWeight={"black"}
          display="inline-flex"
        >
          Duke
        </Box>{" "}
        for some reason
      </Box>
      <Box className={styles.h3} fontWeight={"light"}>
        and this font matches my hair color
      </Box>
      <Box className={styles.h2} fontWeight={"light"}>
        Have I mentioned that I love to develop web things?
      </Box>
      <Link as="/" href="/contacts">
        <Button
          width={"12vw"}
          minW={"120px"}
          maxW={"150px"}
          className={styles.introButton}
          rightIcon={<GiTalk />}
        >
          <Text>Let's talk</Text>
        </Button>
      </Link>
    </Box>
  )
}

const IntroImage = () => {
  return (
    <Box className={styles.introImage}>
      <Box position="relative" flex="1">
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
    </Box>
  )
}

const IntroAnimation = () => {
  const [show, setShow] = React.useState(true)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [show])

  if (!show) return null

  return <Box className={styles.introAnimation}></Box>
}

function Intro() {
  React.useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
  })

  return (
    <>
      <Box className={styles.introPage}>
        <IntroText />
        <IntroImage />
      </Box>
    </>
  )
}

function IntroNoAnimation() {
  return (
    <>
      <Flex
        width="100vw"
        height={"90vh"}
        alignItems={"center"}
        justifyContent={"center"}
        overflow="hidden"
      >
        <IntroText />
        <IntroImage />
      </Flex>
    </>
  )
}

export { IntroNoAnimation, Intro }

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
