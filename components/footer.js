import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Michael Ruiz. All Rights Reserved. This website is based on <a href='https://www.craftz.dog/' rel="noreferrer" target="_blank">Takuya Matsuyamas website</a>
    </Box>
  )
}

export default Footer
