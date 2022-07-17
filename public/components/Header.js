import { Box, Flex, Heading, Select, Spacer, VStack } from "@chakra-ui/react"
import { useRouter } from "next/router"

const Header = ({nombre, apellido, rol}) => {

    const router = useRouter()

    nombre = 'Ivonne'
    apellido = 'Venegas'
    rol = 'AUDITOR'
    return (
        <Box height="8vh" backgroundColor="#1D2226" shadow="md">
            <Flex>
                <Box ml="80px" p='4' color='white'>
                    <VStack>
                        <Heading as="h3" size='lg'>UTE-SEC</Heading>
                    </VStack>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Select borderColor="#313B43" color="white" backgroundColor="#313B43" placeholder={`${nombre} ${apellido} (${rol})`}>
                        <option onClick={
                            () => {
                                router.push('/login')
                            }
                        } value='option1'>Cerrar sesión</option>
                    </Select>
                </Box>
            </Flex>
        </Box>
    )
}

export default Header