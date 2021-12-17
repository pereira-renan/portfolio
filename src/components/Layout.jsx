import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/Home.module.scss"

const Layout = ({ children }) => (
  <>
    <Head>
      <title>{process.env.title}</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
    <footer></footer>
  </>
)

export default Layout
