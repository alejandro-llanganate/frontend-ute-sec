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
import { useEffect, useState } from "react"


const User = () => {

    const [usuarios, setUsuarios] = useState(null);

    useEffect(
        () => {
            (async function () {
                const token = document.cookie.split('=')[1];
                const resp = await fetch(
                    'http://localhost:3000/api/user/getAllUsers',
                    {
                        headers: new Headers({
                            Authorization: 'Bearer ' + token,
                        }),
                    }
                );
                const respUsers = await resp.json();
                setUsuarios(respUsers);
            }
            )();
        }
        , [])

    if (usuarios) {
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
                                    {
                                        usuarios.map((usuario, i) => {
                                            return (
                                                <Tr>
                                                    <Td>
                                                        <Input value={usuario.name} />
                                                    </Td>
                                                    <Td>
                                                        <Input value={usuario.lastname} />
                                                    </Td>
                                                    <Td>
                                                        <Input value={usuario.email} />
                                                    </Td>
                                                    <Td>
                                                        <Select placeholder={usuario.rol}>
                                                            <option value='AUDITOR'>Auditor</option>
                                                            <option value='ADMINISTRADOR'>Administrador</option>
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
                                            )
                                        })
                                    }
                               
                              
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </VStack>
                </Flex>
            </Box>
        )
    } else {
        return (
            <Text>
                Cargando información...
            </Text>
        )
    }
}

export default User;