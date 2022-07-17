import { Box, Button, Flex, Heading, HStack, Icon, Input, InputGroup, InputLeftElement, Select, Text, VStack } from "@chakra-ui/react"
import { MdDelete, MdLock, MdScanner } from "react-icons/md"
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


const User = () => {
    return (
        <Box width="100%" >
            <HStack color="#A5A5A5" p="40px">
                <Icon as={MdScanner} mr="4px" />
                <Text>Usuarios /</Text>
            </HStack>
            <Flex justifyContent="center">
                <VStack spacing="40px">
                    <Heading>Usuarios</Heading>
                    <TableContainer>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Nombre</Th>
                                    <Th>Apellido</Th>
                                    <Th>Correo</Th>
                                    <Th>Rol</Th>
                                    <Th>Acciones</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Input value="Alejandro" />
                                    </Td>
                                    <Td>
                                        <Input value="Llanganate" />
                                    </Td>
                                    <Td>
                                        <Input value="alejo@gmail.com" />
                                    </Td>
                                    <Td>
                                        <Select placeholder='Auditor'>
                                            <option value='Auditor'>Auditor</option>
                                            <option value='Administrador'>Administrador</option>
                                            <option value='Cliente'>Cliente</option>
                                        </Select>
                                    </Td>
                                    <Td>
                                        <HStack>
                                            <Button backgroundColor="#0B4275" color="white">
                                                <HStack>
                                                    <Icon color="white" as={MdLock} />
                                                    <Text>Resetear</Text>
                                                </HStack>
                                            </Button>
                                            <Button backgroundColor="#CE3157">
                                                <Icon color="white" as={MdDelete} />
                                            </Button>
                                        </HStack>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Input value="Ivonne" />
                                    </Td>
                                    <Td>
                                        <Input value="Venegas" />
                                    </Td>
                                    <Td>
                                        <Input value="ivonne.venegas22@gmail.com" />
                                    </Td>
                                    <Td>
                                        <Select placeholder='Auditor'>
                                            <option value='Auditor'>Auditor</option>
                                            <option value='Administrador'>Administrador</option>
                                            <option value='Cliente'>Cliente</option>
                                        </Select>
                                    </Td>
                                    <Td>
                                        <HStack>
                                            <Button backgroundColor="#0B4275" color="white">
                                                <HStack>
                                                    <Icon color="white" as={MdLock} />
                                                    <Text>Resetear</Text>
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

export default User;