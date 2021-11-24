import { Flex, Box, Image, Text, keyframes } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'

const spin = keyframes`
  0% { width: 6rem; height: 6rem }
  50% { width: 8rem; height: 8rem  }
  100% { width: 6rem; height: 6rem }
`
const Description = () => {
  const spinAnimation = `${spin} infinite 2s ease-in-out`
  return (
    <>
      <Box id="description" pos="relative" visibility="hidden" top="-18rem" />
      <Box
        bgColor="#030a2c"
        mt="10rem"
        borderRadius="1rem"
        border="2px solid rgba(119, 244, 254, 0.1)"
        p="5rem 3rem">
        <Text color="brand.main" fontWeight="900" fontSize="1.6rem" mb="3rem">
          Description
        </Text>
        <Box pos="relative">
          <Image src="/consult.png" borderRadius="2.5rem" />
          <Flex
            position="absolute"
            top="50%"
            left="50%"
            bgColor="rgba(119, 244, 254, 0.2)"
            borderRadius="full"
            align="center"
            animation={spinAnimation}
            justify="center">
            <Flex
              color="#fff"
              bgColor="brand.main"
              boxSize="6rem"
              transform="rotate(-90deg)"
              borderRadius="full"
              cursor="pointer"
              align="center"
              fontSize="2.4rem"
              justify="center">
              <TriangleDownIcon />
            </Flex>
          </Flex>
        </Box>
        <Text color="#fff" fontWeight="900" fontSize="1.6rem" mt="10rem">
          More Description
        </Text>
        <Text mt="3rem" color="#fff" lineHeight="2.8rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum enim tortor, vitae
          pretium sem interdum eu. Integer gravida sem vel dui interdum vehicula. Etiam ullamcorper
          pellentesque urna, at vestibulum ligula. Praesent hendrerit, metus vel tincidunt gravida,
          ex mi mollis ligula, in suscipit orci sem nec tortor. Phasellus justo sapien, euismod id
          ipsum eu, pulvinar facilisis arcu. Sed in rhoncus tortor. Praesent purus neque, porttitor
          malesuada lectus at, semper tempor risus. Nullam dictum tristique dolor, eu placerat nunc
          malesuada ut. Cras auctor, est sed luctus tristique, leo mauris maximus lectus, sit amet
          gravida lectus lacus vitae dui. Fusce et finibus augue, sed fringilla sem. Aenean tempus
          mi malesuada, dignissim nunc sit amet, rutrum magna. Donec posuere facilisis diam in
          viverra. Vestibulum blandit mi in massa euismod semper eu a eros. Etiam id tortor magna.
          Suspendisse malesuada quis eros id dignissim. Mauris aliquam condimentum hendrerit.
          Aliquam bibendum auctor massa, sed convallis nulla hendrerit ac. Donec ultrices fermentum
          erat quis posuere. Quisque eget sagittis turpis.
        </Text>
      </Box>
    </>
  )
}

export default Description
