import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import GifHidder from '/components/gif-hidder'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Box
        borderRadius="lg"
        mb={6}
        p={3}
        w="500px"
        h="5px" 
        display="inline-block"
    >
    </Box>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        w="500px"
        h="100px"
        textAlign="center"
      >
        <Image src='/images/cars-portfosddlio-1.png' alt='car-voxel-model' width={688} height={159} />
      </Box>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a Software Engineer interested in Mechatronics Solutions!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Michael Ruiz
          </Heading>
          <p>( Prototyper / Developer / Designer )</p>
          <GifHidder />
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="160px"
            h="160px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/michael.jpg"
              alt="Profile image"
              borderRadius='full'
              width="160%"
              height="160%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I am a computer engineer based in Texas with a
          passion for building hardware/software solutions than can help people. I am fully committed to the philosophy of life-long learning.
          I have a deep passion for embedded systems, AI, and cyber security. Being able to use my creativity and logic on technology drives my excitement for technology. 
          When not online, my days are full of building my projects, keeping fit, and playing guitar.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Hobbies
        </Heading>
        <Paragraph>
          Photography, DIY Hobbyist, car enthusiast
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ruizmic0100" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ruizmic0100
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
