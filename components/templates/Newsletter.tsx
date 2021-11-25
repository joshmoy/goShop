import { Box, Flex, Text, Image } from '@chakra-ui/react'

const Newsletter = () => {
  return (
    <Box py={{ base: '5rem', md: '20rem' }}>
      <Flex h="30rem" w={{ base: '100%', md: '90rem' }} m="0 auto" borderRadius="2.5rem">
        <Flex
          w="35%"
          bgColor="#0447e3"
          borderRadius="2.5rem 0 0 2.5rem"
          display={{ base: 'none', md: 'flex' }}>
          <Image src="/mail3.png" />
        </Flex>
        <Flex
          w={{ base: '100%', md: '65%' }}
          bgColor="#0836f5"
          borderRadius={{ base: '2.5rem', md: '0 2.5rem 2.5rem 0' }}
          justify="center"
          pl="4rem"
          pr={{ base: '3rem', md: '0' }}
          direction="column">
          <Box>
            <Text color="#fff" fontWeight="bold" fontSize="3rem">
              Enter Your Email
            </Text>
            <Text color="#fff" fontWeight="bold" fontSize="3rem">
              For latest news & All Updates
            </Text>
          </Box>
          <Flex mt="3rem">
            <Flex
              bgColor="#003ebb"
              color="#fff"
              h="5rem"
              w={{ base: '16rem', md: '30rem' }}
              border="1px solid rgba(255, 255, 255, 0.5)"
              pl="10px"
              mr="2rem"
              borderRadius="1rem"
              align="center">
              Enter Email Address
            </Flex>
            <Flex
              bgColor="#000"
              color="#fff"
              fontWeight="bold"
              borderRadius="1rem"
              h="5rem"
              w={{ base: '10rem', md: '12rem' }}
              align="center"
              justify="center">
              Subscribe
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Newsletter
