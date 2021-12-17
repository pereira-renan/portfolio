import Link from "next/link"
import Image from "next/image"
import {
  Flex,
  Center,
  Text,
  Button,
  Spacer,
  Box,
  Stack,
  VStack,
  Grid,
} from "@chakra-ui/react"

import styles from "../styles/Home.module.scss"

import bg from "../assets/images/me-bw-v2.png"

import Intro from "../components/Intro"

const Home = () => {
  return <Intro />
}

export default Home
