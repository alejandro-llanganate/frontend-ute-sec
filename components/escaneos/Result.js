import { Box, Button, HStack, Icon, Input, Table, TableContainer, Tbody, Td, Text, Textarea, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import { MdSave } from "react-icons/md"

const Result = () => {
    return (
        <Box shadow="md" p="20px" borderWidth="1px">
            <VStack spacing="20px">
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Tipificación de riesgo</Th>
                                <Th>Riesgo evaluado</Th>
                                <Th>Criticidad</Th>
                                <Th>Observaciones</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Text>
                                        R2
                                    </Text>
                                </Td>
                                <Td>
                                    <Text>
                                        No existe encriptamiento de los datos.
                                    </Text>
                                </Td>
                                <Td backgroundColor="red" color="white">
                                    <Text>
                                        Alto
                                    </Text>
                                </Td>
                                <Td>
                                    <Textarea placeholder="Ingresar sus observaciones">

                                    </Textarea>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Text>
                                        R4
                                    </Text>
                                </Td>
                                <Td>
                                    <Text>
                                        Auto relleno de datos
                                    </Text>
                                </Td>
                                <Td backgroundColor="red" color="white">
                                    <Text>
                                        Alto
                                    </Text>
                                </Td>
                                <Td>
                                    <Textarea placeholder="Ingresar sus observaciones">

                                    </Textarea>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Text>
                                        R5
                                    </Text>
                                </Td>
                                <Td>
                                    <Text>
                                        Mal ofuscamiento de datos
                                    </Text>
                                </Td>
                                <Td backgroundColor="red" color="white">
                                    <Text>
                                        Alto
                                    </Text>
                                </Td>
                                <Td>
                                    <Textarea placeholder="Ingresar sus observaciones">

                                    </Textarea>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Text>
                                        R8
                                    </Text>
                                </Td>
                                <Td>
                                    <Text>
                                        Uso de key logger
                                    </Text>
                                </Td>
                                <Td backgroundColor="red" color="white">
                                    <Text>
                                        Alto
                                    </Text>
                                </Td>
                                <Td>
                                    <Textarea placeholder="Ingresar sus observaciones">

                                    </Textarea>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Text>
                                        R9
                                    </Text>
                                </Td>
                                <Td>
                                    <Text>
                                        Amenazas sociales
                                    </Text>
                                </Td>
                                <Td backgroundColor="red" color="white">
                                    <Text>
                                        Alto
                                    </Text>
                                </Td>
                                <Td>
                                    <Textarea placeholder="Ingresar sus observaciones">

                                    </Textarea>
                                </Td>
                            </Tr>

                        </Tbody>
                    </Table>
                </TableContainer>
                <Button colorScheme="blue">
                    <HStack spacing="15px">
                        <Icon as={MdSave} />
                        <Text>Guardar</Text>
                    </HStack>
                </Button>
            </VStack>
        </Box>
    )
}

export default Result