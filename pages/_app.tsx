import React, { ReactChild } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles'
import { AppProps } from 'next/app'
import '@fontsource/poppins'
import './index.css'

const App = ({ Component, pageProps }: AppProps): ReactChild => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
