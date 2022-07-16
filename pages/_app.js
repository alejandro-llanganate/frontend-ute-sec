import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component }) {

  return (
    <ChakraProvider>
      <Component/>
    </ChakraProvider>
  )


}

export default MyApp
