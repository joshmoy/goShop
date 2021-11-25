import {
  Box,
  Text,
  Flex,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react'
import { MdShoppingBag, MdOutlineShoppingCart, MdPermIdentity } from 'react-icons/md'
import { ChevronDownIcon, SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { useState, useEffect, FC } from 'react'

interface IProps {
  name: string
  hasChild: boolean
  color?: string
}

interface ISocial {
  isMobile?: boolean
}

const Header = () => {
  const [, setIsSticky] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

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

  return (
    <Box
      borderBottom="1px solid rgba(206, 225, 255, 0.1)"
      w="100vw"
      zIndex="500"
      transition=".5s"
      bgColor="brand.dark"
      pos="fixed"
      top="0">
      <Flex
        align="center"
        h="10rem"
        justify="space-between"
        w={{ base: '90%', md: '1300px' }}
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
        <Flex display={{ base: 'none', md: 'flex' }}>
          {navData?.map((el, id) => (
            <Links key={id} name={el.name} hasChild={el.hasChild} />
          ))}
        </Flex>
        <SocialMenu />
        <Box display={{ base: 'block', md: 'none' }} cursor="pointer" onClick={onOpen}>
          <HamburgerIcon fontSize="3rem" color="brand.main" />
        </Box>
      </Flex>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent bgColor="brand.main">
          <Box mt="7.9rem">
            {navData?.map((el, id) => (
              <MobileLinks key={id} name={el.name} hasChild={el.hasChild} color="#040728" />
            ))}
          </Box>
          <Box pl="40px" mt="14rem">
            <SocialMenu isMobile />
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

const Links: FC<IProps> = ({ name, hasChild }) => {
  return (
    <Flex color="brand.text" align="center" _notLast={{ marginRight: '2rem' }}>
      <Text>{name}</Text>
      {hasChild && <ChevronDownIcon />}
    </Flex>
  )
}

const MobileLinks: FC<IProps> = ({ name, hasChild, color }) => {
  return (
    <Flex
      color={color}
      align="center"
      _notLast={{ marginBottom: '2rem' }}
      justify="space-between"
      px="2rem">
      <Text fontSize="2rem">{name}</Text>
      {hasChild && <ChevronDownIcon fontSize="2rem" />}
    </Flex>
  )
}

const SocialMenu: FC<ISocial> = ({ isMobile }) => {
  return (
    <Flex align="center" display={{ base: isMobile ? 'flex' : 'none', md: 'flex' }}>
      <Flex
        align="center"
        justify="center"
        border={isMobile ? '1px solid #040728' : '1px solid rgba(206, 225, 255, 0.2)'}
        borderRadius="12px"
        mr="1rem"
        color="#fff"
        h="3rem"
        w="3rem">
        <SearchIcon color={isMobile ? '#040728' : '#fff'} />
      </Flex>
      <Flex
        align="center"
        justify="center"
        border={isMobile ? '1px solid #040728' : '1px solid rgba(206, 225, 255, 0.2)'}
        borderRadius="12px"
        position="relative"
        h="3rem"
        mr="1rem"
        w="3rem">
        <Icon as={MdOutlineShoppingCart} h="30px" color={isMobile ? '#040728' : '#fff'} />
        <Flex
          bgColor="brand.main"
          boxSize="1.8rem"
          pos="absolute"
          top="-10px"
          right="-5px"
          borderRadius="full"
          border={isMobile ? '1px solid #040728' : 'none'}
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
        border={isMobile ? '1px solid #040728' : '1px solid rgba(206, 225, 255, 0.2)'}
        borderRadius="12px"
        h="3rem"
        w="3rem">
        <Icon as={MdPermIdentity} h="30px" color={isMobile ? '#040728' : '#fff'} />
      </Flex>
    </Flex>
  )
}

export default Header
