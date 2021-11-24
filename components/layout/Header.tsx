import { Box, Text, Flex, Icon } from '@chakra-ui/react'
import { MdShoppingBag, MdOutlineShoppingCart, MdPermIdentity } from 'react-icons/md'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { useState, useEffect, FC } from 'react'

const Header = () => {
  const [, setIsSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    setIsSticky(window.pageYOffset > 300)
  }

  const navData = [
    { name: 'Category', hasChild: true },
    { name: 'Offers', hasChild: false },
    { name: 'Popular Product', hasChild: false },
    { name: 'About Us', hasChild: false },
    { name: 'Blog', hasChild: false },
    { name: 'Contact', hasChild: false }
  ]
  // const style = {
  //   position: 'fixed',
  //   top: 0,
  //   transition: 'all 5s'
  // }
  return (
    <Box
      borderBottom="1px solid rgba(206, 225, 255, 0.1)"
      w="100vw"
      zIndex="500"
      transition="all 5s"
      bgColor="brand.dark"
      // style={isSticky && style}
      pos="fixed"
      top="0">
      <Flex
        align="center"
        h="10rem"
        justify="space-between"
        w="1300px"
        m="0 auto"
        as={motion.div}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}>
        <Flex align="center">
          <Icon as={MdShoppingBag} w="40px" h={30} color="brand.main" />
          <Text color="brand.main" fontWeight="bold" fontSize="20px">
            GoShop
          </Text>
        </Flex>
        <Flex>
          {navData?.map((el, id) => (
            <Links key={id} name={el.name} hasChild={el.hasChild} />
          ))}
        </Flex>
        <Flex align="center">
          <Flex
            align="center"
            justify="center"
            border="1px solid rgba(206, 225, 255, 0.2)"
            borderRadius="12px"
            mr="1rem"
            color="#fff"
            h="3rem"
            w="3rem">
            <SearchIcon />
          </Flex>
          <Flex
            align="center"
            justify="center"
            border="1px solid rgba(206, 225, 255, 0.2)"
            borderRadius="12px"
            position="relative"
            h="3rem"
            mr="1rem"
            w="3rem">
            <Icon as={MdOutlineShoppingCart} h="30px" color="#fff" />
            <Flex
              bgColor="brand.main"
              boxSize="1.8rem"
              pos="absolute"
              top="-10px"
              right="-5px"
              borderRadius="full"
              align="center"
              justify="center">
              <Text color="brand.dark" fontWeight="600" fontSize="13px">
                2
              </Text>
            </Flex>
          </Flex>
          <Flex
            align="center"
            justify="center"
            border="1px solid rgba(206, 225, 255, 0.2)"
            borderRadius="12px"
            h="3rem"
            w="3rem">
            <Icon as={MdPermIdentity} h="30px" color="#fff" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
interface IProps {
  name: string
  hasChild: boolean
}
const Links: FC<IProps> = ({ name, hasChild }) => {
  return (
    <Flex color="brand.text" align="center" _notLast={{ marginRight: '2rem' }}>
      <Text>{name}</Text>
      {hasChild && <ChevronDownIcon />}
    </Flex>
  )
}

export default Header
