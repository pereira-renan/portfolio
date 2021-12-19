import { Box, Flex } from "@chakra-ui/react"
import styles from "../styles/Home.module.scss"
import React from "react"

export function Contacts() {
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
          Contacts page
        </Box>
      </Flex>
    </>
  )
}
