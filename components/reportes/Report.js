import { Box, Button, Flex, Heading, HStack, Icon, Input, InputGroup, InputLeftElement, Text, VStack } from "@chakra-ui/react"
import { MdDelete, MdRemoveRedEye, MdScanner } from "react-icons/md"
import { LinkIcon } from '@chakra-ui/icons'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

const Report = () => {
    return (
        <Box width="100%" >
            <HStack color="#A5A5A5" p="40px">
                <Icon as={MdScanner} mr="4px" />
                <Text>Reportes /</Text>
            </HStack>
            <Flex  justifyContent="center">
            <VStack spacing="40px">
                    <Heading>Reportes</Heading>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Identificador</Th>
                                    <Th>Fecha de escaneo</Th>
                                    <Th>Página web</Th>
                                    <Th>Acciones</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Input value="R-0001" />
                                    </Td>
                                    <Td>
                                        <Input value="01/02/2022" />
                                    </Td>
                                    <Td>
                                        <Input value="www.ute.edu.ec" />
                                    </Td>
                                    <Td>
                                        <HStack>
                                            <Button backgroundColor="#3182CE" color="white">
                                                <HStack>
                                                    <Icon color="white" as={MdRemoveRedEye} />
                                                    <Text>Ver</Text>
                                                </HStack>
                                            </Button>
                                            <Button backgroundColor="#CE3157">
                                                <Icon color="white" as={MdDelete} />
                                            </Button>
                                        </HStack>
                                    </Td>
                                </Tr>
                             
                            </Tbody>
                        </Table>
                    </TableContainer>
                </VStack>
            </Flex>
        </Box>
    )
}

export default Report;