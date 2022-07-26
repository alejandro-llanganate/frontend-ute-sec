import { Box, Button, Flex, Heading, HStack, Select, Spacer, Text, VStack } from "@chakra-ui/react"
import { useRouter } from "next/router"
import Cookies from 'js-cookie'

const Header = ({ user }) => {

    const router = useRouter()
    const cerrarSesion = (e) => {
        Cookies.remove("token")
        router.push("login")
    }

    return (
        <Box height="8vh" backgroundColor="#1D2226" shadow="md">
            <Flex>
                <Box ml="80px" p='4' color='white'>
                    <VStack>
                        <Heading as="h3" size='lg'>UTE-SEC</Heading>
                    </VStack>
                </Box>
                <Spacer />
                <HStack spacing={5}>
                    <Text p={3} borderRadius={2} borderColor="#313B43" color="white" backgroundColor="#313B43">{`${user.name} ${user.lastname} (${user.rol})`}</Text>
                    <Button onClick={cerrarSesion} color="white" colorScheme="red">
                        Cerrar sesión
                    </Button>
                    <Box></Box>
                </HStack>

            </Flex>
        </Box>
    )
}

export default Header