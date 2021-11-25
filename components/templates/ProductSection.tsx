import { Flex, Box, Image, Text, Icon } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { MdStarOutline } from 'react-icons/md'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const ProductSection = () => {
  const imageLinks = ['img1.png', 'img2.png', 'img3.png', 'img4.png']
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeImage, setActiveImage] = useState(imageLinks[activeIndex])

  useEffect(() => {
    setActiveImage(imageLinks[activeIndex])
  }, [activeIndex])

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        delayChildren: 1,
        staggerChildren: 0.4,
        type: 'spring',
        stiffness: 5
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, trasition: { type: 'spring', stiffness: 3 } }
  }

  return (
    <Box mt="10rem" minH="calc(100vh - 15rem)" pt="5rem">
      <Flex justify="space-between" direction={{ base: 'column', md: 'row' }}>
        <Box w={{ base: '100%', md: '55%' }}>
          <Flex
            border="2px solid rgba(119, 244, 254, 0.1)"
            h="60vh"
            mb="1rem"
            bgColor="#030a2c"
            align="center"
            justify="center"
            as={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            borderRadius="3rem 3rem 0 0">
            <Image src={activeImage} h="50vh" maxW="50%" />
          </Flex>
          <Flex
            justify="space-between"
            as={motion.div}
            variants={container}
            initial="hidden"
            animate="show">
            {imageLinks?.map((el, id) => (
              <Flex
                key={id}
                w="24%"
                align="center"
                justify="center"
                variants={item}
                as={motion.div}
                cursor="pointer"
                bgColor={id === activeIndex ? 'transparent' : '#030a2c'}
                onClick={() => setActiveIndex(id)}
                h="13rem"
                _first={{ borderBottomLeftRadius: '50px' }}
                border="2px solid rgba(119, 244, 254, 0.1)">
                <Image src={el} h={{ base: '5rem', md: '7rem' }} />
              </Flex>
            ))}
          </Flex>
        </Box>
        <Box w={{ base: '100%', md: '39%' }}>
          <Text
            color="#fff"
            fontWeight="900"
            fontSize="2.8rem"
            mt={{ base: '4rem', md: '2rem' }}
            as={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}>
            Logitech MX Ergo Advanced Wireless Trackball
          </Text>
          <Text
            color="#cee1ff"
            mt="5rem"
            mb="3rem"
            as={motion.p}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 1.5 } }}>
            Price & Details
          </Text>
          <Box as={motion.div} variants={container} initial="hidden" animate="show">
            <Flex
              color="#fff"
              justify="space-between"
              variants={item}
              as={motion.div}
              pb="2rem"
              borderBottom="1px solid rgba(119, 244, 254, 0.1)">
              <Text>Price</Text>
              <Text fontWeight="bold">$99.99(USD)</Text>
            </Flex>

            <Flex
              color="#fff"
              justify="space-between"
              pb="2rem"
              pt="2rem"
              variants={item}
              as={motion.div}
              borderBottom="1px solid rgba(119, 244, 254, 0.1)">
              <Text>Brand</Text>
              <Text fontWeight="bold">Logitech</Text>
            </Flex>

            <Flex
              color="#fff"
              justify="space-between"
              pb="2rem"
              pt="2rem"
              variants={item}
              as={motion.div}
              borderBottom="1px solid rgba(119, 244, 254, 0.1)">
              <Text>Model</Text>
              <Text fontWeight="bold">MX Ergo</Text>
            </Flex>

            <Flex color="#fff" justify="space-between" pt="2rem" variants={item} as={motion.div}>
              <Text>Review</Text>

              <Flex>
                <Text fontWeight="bold">
                  158 <br /> user
                </Text>
                <Icon as={MdStarOutline} h="2.5rem" w="2.5rem" color="brand.main" />
                <Icon as={MdStarOutline} h="2.5rem" w="2.5rem" color="brand.main" />
                <Icon as={MdStarOutline} h="2.5rem" w="2.5rem" color="brand.main" />
                <Icon as={MdStarOutline} h="2.5rem" w="2.5rem" color="brand.main" />
                <Icon as={MdStarOutline} h="2.5rem" w="2.5rem" color="rgba(119, 244, 254, 0.3)" />
              </Flex>
            </Flex>
            <Flex align="center" mt="4rem" justify="space-between" variants={item} as={motion.div}>
              <Flex
                border="2px solid rgba(119, 244, 254, 0.1)"
                h="6rem"
                borderRadius="1rem"
                px="2rem"
                justify="space-between"
                align="center"
                bgColor="#030a2c"
                w={{ base: '158px', md: '200px' }}>
                <Flex
                  h="2.4rem"
                  w="2.4rem"
                  align="center"
                  justify="center"
                  color="#fff"
                  fontSize="10px"
                  border="1px solid #fff"
                  borderRadius="full">
                  <AddIcon />
                </Flex>
                <Text fontSize="2.4rem" color="#fff" fontWeight="700">
                  01
                </Text>
                <Flex
                  h="2.4rem"
                  w="2.4rem"
                  align="center"
                  justify="center"
                  color="#fff"
                  fontSize="10px"
                  border="1px solid #fff"
                  borderRadius="full">
                  <MinusIcon />
                </Flex>
              </Flex>
              <Flex color="brand.main" fontSize={{ base: '2.4rem', md: '3rem' }} fontWeight="900">
                Total: $99.99
              </Flex>
            </Flex>
            <Flex justify="space-between" align="center" mt="2rem" variants={item} as={motion.div}>
              <Flex
                borderRadius="1rem"
                px="2rem"
                align="center"
                justify="center"
                w="45%"
                h="6rem"
                color="#fff"
                fontWeight="900"
                fontSize="1.6rem"
                bgColor="#122756">
                Add to cart
              </Flex>
              <Flex
                borderRadius="1rem"
                px="2rem"
                align="center"
                justify="center"
                w="45%"
                h="6rem"
                bgColor="#0836f5"
                color="#fff"
                fontWeight="900"
                fontSize="1.6rem">
                Buy Now
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default ProductSection
