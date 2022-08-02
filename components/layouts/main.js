import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Michael's homepage" />
        <meta name="author" content="Michael Ruiz" />
        <meta name="author" content="GR-073B" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/tab-icon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Michael's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/tab-icon.ico" />
        <title>Michael Ruiz - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
