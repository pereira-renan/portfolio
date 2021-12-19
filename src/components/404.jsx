import { Box, Flex } from "@chakra-ui/react"
import styles from "../styles/Home.module.scss"
import React from "react"

export function NotFound() {
  return (
    <>
      <Flex
        width="100vw"
        height={"90vh"}
        alignItems={"center"}
        justifyContent={"center"}
        overflow="hidden"
      >
        <Box className={styles.h1} fontWeight={"black"} textAlign={"center"}>
          Ops, thats a 404...
          <br />I totally could not find this page
        </Box>
      </Flex>
    </>
  )
}
