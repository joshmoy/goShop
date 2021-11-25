import { Flex, Box, Image, Text } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { container2, item } from './variants'
import { useEffect } from 'react'

const Specification = () => {
  const [ref, inView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
  }, [controls, inView])
  return (
    <Box
      w={{ base: '100%', md: '30%' }}
      ref={ref}
      animate={controls}
      as={motion.div}
      initial="hidden"
      variants={container2}>
      <Text
        bgGradient="linear(to-r, brand.main, #fff)"
        bgClip="text"
        fontSize="1.8rem"
        as={motion.p}
        variants={item}
        mt={{ base: '5rem', md: '2rem' }}
        fontWeight="extrabold">
        Related Product
      </Text>
      <Flex
        as={motion.div}
        variants={item}
        direction="column"
        justify="center"
        mt="3rem"
        bgColor="#030a2c"
        border="2px solid rgba(119, 244, 254, 0.1)"
        h="47vh"
        borderRadius="1.5rem">
        <Flex justify="center" pos="relative">
          <Box
            bgColor="#047082"
            pos="absolute"
            top="-20px"
            w="10rem"
            pt="1rem"
            pr="1rem"
            right="20px"
            borderRadius="15px">
            <Text textAlign="center" color="brand.main" fontWeight="700" fontSize="2rem">
              $68
            </Text>
            <Text textAlign="right" color="#14c2e0" fontWeight="700">
              $80
            </Text>
            <Box
              borderBottom="1px solid #14c2e0"
              w="40px"
              position="absolute"
              bottom="10px"
              right="0.5rem"
            />
            <Box
              position="absolute"
              bottom="-10px"
              left="1rem"
              borderTop="25px solid #047082"
              borderLeft="12px solid transparent"
              borderRight="12px solid transparent"
            />
          </Box>

          <Image src="/img4.png" h="30vh" ml="-5rem" />
        </Flex>
        <Text textAlign="center" color="#cee1ff" fontSize="2rem" fontWeight="bold">
          Logitech G502 Lightspeed <br /> Wireless Gaming Mouse
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        mt="3rem"
        border="2px solid rgba(119, 244, 254, 0.1)"
        h="47vh"
        bgColor="#030a2c"
        borderRadius="1.5rem">
        <Flex justify="center" pos="relative">
          <Box
            bgColor="#047082"
            pos="absolute"
            top="-20px"
            w="10rem"
            pt="1rem"
            pr="1rem"
            right="20px"
            borderRadius="15px">
            <Text textAlign="center" color="brand.main" fontWeight="700" fontSize="2rem">
              $68
            </Text>
            <Text textAlign="right" color="#14c2e0" fontWeight="700">
              $80
            </Text>
            <Box
              borderBottom="1px solid #14c2e0"
              w="40px"
              position="absolute"
              bottom="10px"
              right="0.5rem"
            />
            <Box
              position="absolute"
              bottom="-10px"
              left="1rem"
              borderTop="25px solid #047082"
              borderLeft="12px solid transparent"
              borderRight="12px solid transparent"
            />
          </Box>

          <Image src="/img4.png" h="30vh" ml="-5rem" />
        </Flex>
        <Text textAlign="center" color="#cee1ff" fontSize="2rem" fontWeight="bold">
          Logitech G502 Lightspeed <br /> Wireless Gaming Mouse
        </Text>
      </Flex>
      <Flex
        borderRadius="1.5rem"
        px="2rem"
        mt="2.5rem"
        align="center"
        justify="center"
        w="14rem"
        h="5rem"
        color="#fff"
        fontWeight="900"
        fontSize="1.6rem"
        bgColor="#122756">
        See more
      </Flex>
    </Box>
  )
}

export default Specification
