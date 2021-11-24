import { Flex, Box, Text } from '@chakra-ui/react'
import Specification from './Specification'
import Description from './Description'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
const DetailsSection = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [activeTab, setActiveTab] = useState('specification')
  const router = useRouter()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    setIsSticky(window.pageYOffset > 713)
    if (window.pageYOffset <= 1644) setActiveTab('specification')
    if (window.pageYOffset > 1644) setActiveTab('description')
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

  // const container = {
  //   hidden: { opacity: 0, y: 5 },
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       delay: 1,
  //       delayChildren: 1,
  //       staggerChildren: 0.3,
  //       type: 'spring',
  //       stiffness: 5
  //     }
  //   }
  // }

  // const item = {
  //   hidden: { opacity: 0, y: 5 },
  //   show: { opacity: 1, y: 0, trasition: { type: 'spring', stiffness: 3 } }
  // }

  const handleClick = (param: string) => {
    setActiveTab(param)
    router.push(`#${param}`)
  }
  return (
    <Box mt="15rem">
      <Flex justify="space-between">
        <Box w="55%">
          <Flex
            pos={isSticky ? 'fixed' : 'relative'}
            top={isSticky ? '10rem' : '0'}
            left={isSticky ? '0' : '0'}
            w={isSticky ? '100vw' : '100%'}
            h={isSticky ? '15rem' : 'auto'}
            borderBottom={isSticky ? '1px solid rgba(206, 225, 255, 0.1)' : 'none'}
            align="center"
            zIndex={isSticky ? 500 : 0}
            bgColor="brand.dark">
            <Flex w="1100px" m="0 auto" px={isSticky ? '1rem' : '0'}>
              <Flex
                borderRadius="1rem"
                px="2rem"
                align="center"
                justify="center"
                w="14rem"
                h="5rem"
                mr="2rem"
                color="#fff"
                opacity={activeTab === 'specification' ? 1 : 0.5}
                cursor="pointer"
                onClick={() => handleClick('specification')}
                fontWeight="900"
                fontSize="1.6rem"
                bgColor="#122756">
                Specification
              </Flex>
              <Flex
                borderRadius="1rem"
                px="2rem"
                align="center"
                justify="center"
                w="14rem"
                h="5rem"
                mr="2rem"
                opacity={activeTab === 'description' ? 1 : 0.5}
                cursor="pointer"
                onClick={() => handleClick('description')}
                color="#fff"
                fontWeight="900"
                fontSize="1.6rem"
                bgColor="#122756">
                Description
              </Flex>
              <Flex
                borderRadius="1rem"
                px="2rem"
                align="center"
                justify="center"
                opacity={activeTab === 'reviews' ? 1 : 0.5}
                cursor="pointer"
                onClick={() => handleClick('reviews')}
                w="14rem"
                h="5rem"
                color="#fff"
                fontWeight="900"
                fontSize="1.6rem"
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
            p="5rem 3rem">
            <Text color="brand.main" fontWeight="900" fontSize="1.6rem" mb="3rem">
              Specification
            </Text>
            {specifications?.map((el, id) => (
              <Flex
                key={id}
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
