import { Box, Text, Flex, Icon } from '@chakra-ui/react'
import { MdShoppingBag } from 'react-icons/md'

const Footer = () => {
  return (
    <Box bgColor="#030a2c" w="100vw">
      <Flex
        h={{ base: '12rem', md: '10rem' }}
        align={{ md: 'center' }}
        pb={{ base: '2rem', md: 0 }}
        direction={{ base: 'column', md: 'row' }}
        justify={{ md: 'space-between' }}
        w={{ base: '90%', md: '1300px' }}
        m="0 auto">
        <Flex align="center">
          <Icon as={MdShoppingBag} w="40px" h={30} color="brand.main" />
          <Text color="brand.main" fontWeight="bold" fontSize="14px">
            GoShop
          </Text>
        </Flex>
        <Flex align="center" mt={{ base: '1rem', md: 0 }}>
          <Text color="#fff" fontWeight="bold" mr="2rem">
            Download the App
          </Text>
          <Flex
            direction="column"
            h="5rem"
            px="2rem"
            borderRadius="10px"
            mr="1rem"
            justify="center"
            bgColor="#003ebb">
            <Text color="brand.main" fontSize="1rem">
              Download from
            </Text>
            <Text color="brand.main" fontWeight="bold">
              App Store
            </Text>
          </Flex>
          <Flex
            direction="column"
            h="5rem"
            px="2rem"
            borderRadius="10px"
            border="1px solid #77F4FE"
            justify="center"
            bgColor="#000">
            <Text color="brand.main" fontSize="1rem">
              Download from
            </Text>
            <Text color="brand.main" fontWeight="bold">
              App Store
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
