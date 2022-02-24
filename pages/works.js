import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import viachips from '../public/images/works/via_chips.jpg'
import helicopter from '../public/images/works/4th-iteration.jpg'
import modelrocket from '../public/images/works/modelrocket.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="viachips" title="Secondary Phone Screen" thumbnail={viachips}>
            A Secondary phone screen accessory that boosts productivity and media consumption. (WIP)
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="helicopter" title="3D Printed RC Helicopter" thumbnail={helicopter}>
            Designed a helicopter hull and custom flight computer to understand flight control surfaces, RC communication, and embedded software programming.j
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="modelrocket" title="3D Printed Model Rocket" thumbnail={modelrocket}>
            Created a model rocket from scratch using fusion 360. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
