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
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        w="500px"
        h="80px"
        textAlign="center"
      >
        <Image src='/images/cars-portfosddlio-1.png' alt='car-voxel-model' width={788} height={159} />
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
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/michael.jpg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Michael is a Software Engineer interested in Mechatronics based in Texas with a
          passion for building hardware solutions than can help people. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, his days
          are full of building his projects and trying to satisfy his insatiable curiosity.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Texas.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Currently a Senior for Computer Engineering at the University
          of Texas at San Antonio.
        </BioSection>
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
