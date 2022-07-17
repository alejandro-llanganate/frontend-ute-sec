import { Box, Button, Flex, Heading, HStack, Icon, Input, InputGroup, InputLeftElement, Text, VStack } from "@chakra-ui/react"
import { MdScanner } from "react-icons/md"
import { LinkIcon } from '@chakra-ui/icons'


const Scanner = () => {
    return (
        <Box width="100%" >
            <HStack color="#A5A5A5" p="40px">
                <Icon as={MdScanner} mr="4px" />
                <Text>Escaneos /</Text>
            </HStack>
            <Flex mt="5%"  justifyContent="center">
                <VStack>
                    <Box shadow="md" background="white" p="100px" borderWidth="1px" borderRadius="lg" >
                        <VStack spacing="20px" >
                            <Heading>
                                <HStack>
                                    <Text>REALIZAR UN NUEVO </Text>
                                    <Text color="teal">ESCANEO</Text>
                                </HStack>
                            </Heading>
                            <Text>Ingresa la dirección web o URL de la página a escanear.</Text>
                            <form  >
                                <VStack spacing="30px">
                                    <InputGroup width="100%">
                                        <InputLeftElement
                                            pointerEvents='none'
                                            children={<LinkIcon color='gray.300' />}
                                        />
                                        <Input width="500px" type='text' placeholder='https://www.example.com' />
                                    </InputGroup>
                                    <Button colorScheme="teal">
                                        Escanear
                                    </Button>
                                </VStack>
                            </form>
                        </VStack>
                    </Box>
                </VStack>

            </Flex>
        </Box>
    )
}

export default Scanner;