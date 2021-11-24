import React, { ReactChild } from 'react'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import ProductSection from '@components/templates/ProductSection'
import Header from '@components/layout/Header'
import DetailsSection from '@components/templates/DetailsSection'

const Home = (): ReactChild => {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>
      <Box bgColor="#040728" minW="100vw" minH="100vh">
        <Header />
        <Container maxW="1100px">
          <ProductSection />
          <DetailsSection />
        </Container>
      </Box>
    </Box>
  )
}

export default Home
