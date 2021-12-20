import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Link,
  Circle,
  Text,
} from "@chakra-ui/react"
import styles from "../styles/Contacts.module.scss"
import React from "react"
import {
  GrLinkedinOption,
  GrGithub,
  GrInstagram,
  GrYoutube,
  GrMail,
} from "react-icons/gr"
import { BiDownload } from "react-icons/bi"

export function Contacts() {
  return (
    <>
      <Box className={styles.contactPage}>
        <Box className={styles.contactIntro}>
          <Box className={styles.h2}>Good to see you here!</Box>
          <Box className={styles.h3}>
            Feel free to reach me out on my socials below
          </Box>
        </Box>
        <SimpleGrid columns={1} spacing={4} className={styles.contactGrid}>
          <Link
            className={styles.contactLink}
            href="https://github.com/pereira-renan"
            isExternal
          >
            <Circle className={styles.contactIcon}>
              <GrGithub />
            </Circle>
            <Box className={styles.contactButton}>
              <Text className={styles.contactText}>@pereira-renan</Text>
            </Box>
          </Link>
          <Link
            className={styles.contactLink}
            href="https://www.linkedin.com/in/pereira-renan/"
            isExternal
          >
            <Circle className={styles.contactIcon}>
              <GrLinkedinOption />
            </Circle>
            <Box className={styles.contactButton}>
              <Text className={styles.contactText}>@pereira-renan</Text>
            </Box>
          </Link>
          <Link
            className={styles.contactLink}
            href="https://www.instagram.com/duke__js/"
            isExternal
          >
            <Circle className={styles.contactIcon}>
              <GrInstagram />
            </Circle>
            <Box className={styles.contactButton}>
              <Text className={styles.contactText}>@duke__js</Text>
            </Box>
          </Link>
          <Link
            className={styles.contactLink}
            href="mailto:duke.js@outlook.com"
            isExternal
          >
            <Circle className={styles.contactIcon}>
              <GrMail />
            </Circle>
            <Box className={styles.contactButton}>
              <Text className={styles.contactText}>duke.js@outlook.com</Text>
            </Box>
          </Link>
          <Link
            className={styles.contactLink}
            href="Resume.pdf"
            target={"_blank"}
            isExternal
          >
            <Circle className={styles.contactIcon}>
              <BiDownload />
            </Circle>
            <Box className={styles.contactButton}>
              <Text className={styles.contactText}>Resume</Text>
            </Box>
          </Link>
        </SimpleGrid>
      </Box>
    </>
  )
}

/*
<Link
            className={styles.contactLink}
            href="https://www.youtube.com/channel/UCsOZOTFoPak9A0DIh3UPQwg"
            isExternal
          >
            <Circle className={styles.contactIcon}>
              <GrYoutube />
            </Circle>
            <Box className={styles.contactButton}>
              <Text className={styles.contactText}>@Duke_JS</Text>
            </Box>
          </Link>
          */
