import { Flex, Box, Text, useMediaQuery } from '@chakra-ui/react'
import Specification from './Specification'
import Description from './Description'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { container, item } from './variants'
const DetailsSection = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobile] = useMediaQuery('(max-width: 767px)')
  const [activeTab, setActiveTab] = useState('specification')
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const router = useRouter()
  const boxRef = useRef(null)

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
  }, [controls, inView])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    isMobile ? setIsSticky(window.pageYOffset > 1413) : setIsSticky(window.pageYOffset > 713)
    if (isMobile) {
      if (window.pageYOffset <= 3284) setActiveTab('specification')
      if (window.pageYOffset > 3284) setActiveTab('description')
      if (window.pageYOffset > 4695) setActiveTab('reviews')
    } else {
      if (window.pageYOffset <= 1644) setActiveTab('specification')
      if (window.pageYOffset > 1644) setActiveTab('description')
      if (window.pageYOffset > 2850) setActiveTab('reviews')
    }
  }
  const specifications = [
    { name: 'Keys', desc: '9 Keys' },
    { name: 'Connection Type', desc: 'Wired' },
    { name: 'Resolution', desc: '100 - 1000' },
    { name: 'Acceleration', desc: '25g' },
    { name: 'Color Option', desc: 'Default 5RGB Lighting' },
    { name: 'Switch Lifecycle', desc: 'Over 20 million clicks' },
    { name: 'Keys', desc: '9 Keys' },
    { name: 'Connection Type', desc: 'Wired' },
    { name: 'Resolution', desc: '100 - 1000' },
    { name: 'Acceleration', desc: '25g' },
    { name: 'Color Option', desc: 'Default 5RGB Lighting' },
    { name: 'Switch Lifecycle', desc: 'Over 20 million clicks' }
  ]

  const handleClick = (param: string) => {
    setActiveTab(param)
    router.push(`#${param}`)
  }
  return (
    <Box mt="15rem">
      <Flex justify="space-between" direction={{ base: 'column', md: 'row' }}>
        <Box w={{ base: '100%', md: '55%' }}>
          <Flex
            pos={isSticky ? 'fixed' : 'relative'}
            top={isSticky ? '10rem' : '0'}
            left={isSticky ? '0' : '0'}
            w={{ base: '100%', md: isSticky ? '100vw' : '100%' }}
            h={isSticky ? '15rem' : 'auto'}
            borderBottom={isSticky ? '1px solid rgba(206, 225, 255, 0.1)' : 'none'}
            align="center"
            zIndex={isSticky ? 500 : 0}
            bgColor="brand.dark">
            <Flex
              w="1100px"
              m="0 auto"
              ref={ref}
              animate={controls}
              as={motion.div}
              variants={container}
              initial="hidden"
              px={{ base: isSticky ? '3rem' : 0, md: isSticky ? '1rem' : '0' }}>
              <Flex
                borderRadius="1rem"
                px={{ base: '1rem', md: '2rem' }}
                align="center"
                justify="center"
                w={{ base: 'auto', md: '14rem' }}
                h="5rem"
                mr={{ base: '1rem', md: '2rem' }}
                color="#fff"
                as={motion.div}
                variants={item}
                opacity={activeTab === 'specification' ? 1 : 0.5}
                cursor="pointer"
                onClick={() => handleClick('specification')}
                fontWeight="900"
                fontSize={{ base: '1.4rem', md: '1.6rem' }}
                bgColor="#122756">
                Specification
              </Flex>
              <Flex
                borderRadius="1rem"
                px={{ base: '1rem', md: '2rem' }}
                align="center"
                justify="center"
                w={{ base: 'auto', md: '14rem' }}
                h="5rem"
                as={motion.div}
                variants={item}
                mr={{ base: '1rem', md: '2rem' }}
                opacity={activeTab === 'description' ? 1 : 0.5}
                cursor="pointer"
                onClick={() => handleClick('description')}
                color="#fff"
                fontWeight="900"
                fontSize={{ base: '1.4rem', md: '1.6rem' }}
                bgColor="#122756">
                Description
              </Flex>
              <Flex
                borderRadius="1rem"
                px={{ base: '1rem', md: '2rem' }}
                align="center"
                justify="center"
                opacity={activeTab === 'reviews' ? 1 : 0.5}
                cursor="pointer"
                as={motion.div}
                variants={item}
                onClick={() => handleClick('reviews')}
                w={{ base: 'auto', md: '14rem' }}
                h="5rem"
                color="#fff"
                fontWeight="900"
                fontSize={{ base: '1.4rem', md: '1.6rem' }}
                bgColor="#122756">
                Reviews(158)
              </Flex>
            </Flex>
          </Flex>
          <Box id="specification" pos="relative" visibility="hidden" top="-18rem" />
          <Box
            mt={isSticky ? '6rem' : '3rem'}
            bgColor="#030a2c"
            border="2px solid rgba(119, 244, 254, 0.1)"
            borderRadius="1.5rem"
            as={motion.div}
            ref={boxRef}
            variants={container}
            animate={controls}
            initial="hidden"
            p="5rem 3rem">
            <Text
              color="brand.main"
              fontWeight="900"
              fontSize="1.6rem"
              mb="3rem"
              as={motion.p}
              variants={item}>
              Specification
            </Text>
            {specifications?.map((el, id) => (
              <Flex
                key={id}
                as={motion.div}
                variants={item}
                _notLast={{ borderBottom: '1px solid rgba(119, 244, 254, 0.1)' }}
                py="2rem">
                <Text w="40%" color="#fff">
                  {el.name}
                </Text>
                <Text w="60%" color="#fff" fontWeight="900">
                  {el.desc}
                </Text>
              </Flex>
            ))}
          </Box>
        </Box>
        <Specification />
      </Flex>
      <Description />
    </Box>
  )
}

export default DetailsSection
