import { Flex, Box, Image, Text, Icon, Progress } from '@chakra-ui/react'
import { MdStarOutline, MdStar } from 'react-icons/md'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { container, item, item2 } from './variants'
const Reviews = () => {
  const [ref, inView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({
        transition: {
          type: 'spring',
          stiffness: 10
        },
        opacity: 1,
        y: 0
      })
    }
    return controls.stop
  }, [controls, inView])

  return (
    <>
      <Box id="reviews" pos="relative" visibility="hidden" top="-18rem" />
      <Box mt="10rem" borderRadius="1rem" border="2px solid rgba(119, 244, 254, 0.1)" p="5rem 3rem">
        <Text
          color="brand.main"
          fontWeight="900"
          fontSize="1.6rem"
          mb="3rem"
          ref={ref}
          as={motion.p}
          initial={{ opacity: 0.1, y: 60 }}
          animate={controls}>
          Reviews
        </Text>
        <Flex mt="3rem" justify="space-between" direction={{ base: 'column', md: 'row' }}>
          <Box w={{ base: '100%', md: '35%' }}>
            <OverallRating />
            <FeatureRating />
          </Box>
          <AllReviews />
        </Flex>
      </Box>
    </>
  )
}

const OverallRating = () => {
  const [ref, inView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
    return controls.stop
  }, [controls, inView])
  const ratings = [
    { key: 5, progress: 90, review: 185 },
    { key: 4, progress: 30, review: 45 },
    { key: 3, progress: 20, review: 25 },
    { key: 2, progress: 10, review: 15 },
    { key: 1, progress: 5, review: 5 }
  ]
  return (
    <Box
      bgColor="#030a2c"
      border="2px solid rgba(119, 244, 254, 0.1)"
      p="4rem 2rem 3rem"
      borderRadius="2.5rem"
      ref={ref}
      animate={controls}
      as={motion.div}
      variants={container}
      initial="hidden">
      <Text color="#fff" fontSize="1.3rem" mb="1.5rem" as={motion.p} variants={item}>
        Overall Rating
      </Text>
      <Text color="#fff" fontWeight="900" fontSize="2.4rem" mb="1rem" as={motion.p} variants={item}>
        4.5{' '}
        <Text as="span" fontWeight="400" fontSize="1.6rem">
          {' '}
          / 5
        </Text>
      </Text>
      <Icon as={MdStarOutline} h="2.5rem" w="2.5rem" color="brand.main" />
      <Icon as={MdStarOutline} h="2.5rem" w="2.5rem" color="brand.main" />
      <Icon as={MdStarOutline} h="2.5rem" w="2.5rem" color="brand.main" />
      <Icon as={MdStarOutline} h="2.5rem" w="2.5rem" color="brand.main" />
      <Icon as={MdStarOutline} h="2.5rem" w="2.5rem" color="rgba(119, 244, 254, 0.3)" />
      <Text color="#fff" mt="1.5rem" as={motion.p} variants={item}>
        158 <br /> Reviews
      </Text>
      <Text color="#fff" fontSize="1.3rem" mt="3rem" mb="2rem" as={motion.p} variants={item}>
        Rating Breakdown
      </Text>
      {ratings?.map((el, id) => (
        <Flex
          align="center"
          justify="space-between"
          key={id}
          _notLast={{ mb: '2rem' }}
          as={motion.div}
          variants={item}>
          <Flex align="center">
            <Text color="#fff" mr="2px" w="9px">
              {el.key}
            </Text>
            <Icon as={MdStarOutline} h="1.6rem" w="1.6rem" color="brand.main" />
            <Box w={{ base: '170px', md: '220px' }} ml="1rem">
              <Progress
                colorScheme="green"
                h="1rem"
                value={el.progress}
                bgColor="#112653"
                borderRadius="20px"
              />
            </Box>
          </Flex>
          <Text fontWeight="bold" color="#fff" w="23px">
            {el.review}
          </Text>
        </Flex>
      ))}
    </Box>
  )
}

const FeatureRating = () => {
  const [ref, inView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
    return controls.stop
  }, [controls, inView])
  const features = ['For gaming', 'For gaming', 'Quality of material', 'For gaming', 'For gaming']
  return (
    <Box
      bgColor="#030a2c"
      mt="3rem"
      border="2px solid rgba(119, 244, 254, 0.1)"
      p="4rem 2rem"
      ref={ref}
      animate={controls}
      as={motion.div}
      variants={container}
      initial="hidden"
      borderRadius="2.5rem">
      <Text color="#fff" fontSize="1.4rem" mb="3rem" as={motion.p} variants={item}>
        By Feature
      </Text>

      {features?.map((el, id) => (
        <Flex
          align="center"
          justify="space-between"
          key={id}
          _notLast={{ mb: '3rem' }}
          as={motion.div}
          variants={item}>
          <Text color="#fff" mr="2px">
            {el}
          </Text>
          <Flex align="center">
            <Icon as={MdStarOutline} h="1.6rem" w="1.6rem" color="brand.main" />
            <Icon as={MdStarOutline} h="1.6rem" w="1.6rem" color="brand.main" />
            <Icon as={MdStarOutline} h="1.6rem" w="1.6rem" color="brand.main" />
            <Icon as={MdStarOutline} h="1.6rem" w="1.6rem" color="brand.main" />
            <Icon as={MdStarOutline} h="1.6rem" w="1.6rem" color="rgba(119, 244, 254, 0.3)" />

            <Text fontWeight="bold" color="#fff" w="23px" ml="10px">
              4.7
            </Text>
          </Flex>
        </Flex>
      ))}
      <Text fontWeight="bold" mt="4rem" color="#fff" as={motion.p} variants={item}>
        See More <ChevronDownIcon />
      </Text>
    </Box>
  )
}

export const AllReviews = () => {
  const [ref, inView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
    return controls.stop
  }, [controls, inView])
  const reviews = [1, 2, 3, 4, 5]
  return (
    <Box
      w={{ base: '100%', md: '50%' }}
      mt={{ base: '5rem', md: 0 }}
      ref={ref}
      animate={controls}
      as={motion.div}
      variants={container}
      initial="hidden">
      {reviews?.map((el) => (
        <Flex key={el} _notLast={{ mb: '6rem' }} as={motion.div} variants={item2}>
          <Box boxSize="6rem">
            <Image src="/consult.png" borderRadius="full" h="full" w="full" objectFit="cover" />
          </Box>
          <Box ml="2rem" w="calc(100% - 6rem)">
            <Text color="#fff" fontWeight="700" fontSize="1.6rem" mb="1rem">
              Some Name
            </Text>
            <Text color="rgba(255,255,255,0.6)" lineHeight="3rem" mb="1.5rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum enim tortor,
              vitae pretium sem interdum eu. Integer gravida sem vel dui interdum vehicula. Etiam
            </Text>
            <Flex align="center">
              <Icon as={MdStar} h="1.6rem" w="1.6rem" color="brand.main" />
              <Icon as={MdStar} h="1.6rem" w="1.6rem" color="brand.main" />
              <Icon as={MdStar} h="1.6rem" w="1.6rem" color="brand.main" />
              <Icon as={MdStar} h="1.6rem" w="1.6rem" color="brand.main" />
              <Icon as={MdStarOutline} h="1.6rem" w="1.6rem" color="rgba(119, 244, 254, 0.3)" />
              <Text ml="2rem" color="#fff" fontWeight="bold">
                Satisfactory
              </Text>
            </Flex>
          </Box>
        </Flex>
      ))}
      <Flex
        borderRadius="1rem"
        px="2rem"
        align="center"
        justify="center"
        w="10rem"
        h="5rem"
        color="#fff"
        fontWeight="900"
        fontSize="1.6rem"
        bgColor="#122756"
        as={motion.div}
        variants={item2}>
        See All
      </Flex>
    </Box>
  )
}

export default Reviews
