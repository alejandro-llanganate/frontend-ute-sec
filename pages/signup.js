import { Box, Button, Center, Divider, Heading, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import Signup from '../components/auth/Signup';

const SignUpPage = () => {

    const router = useRouter();

    return (
        <div style={{
            width: '100%',
            backgroundColor: '#E5E5E5',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <Center>
                <Box width="30%" shadow="md" background="white" p="40px" borderWidth="2px" borderRadius="lg">
                    <Heading mt={5} mb={5} align="center"> Crear una cuenta </Heading>
                    <Signup />
                    <Divider />
                    <Button onClick={() => {
                        router.push('login')
                    }} mt={5} type="submit" width="100%" colorScheme="blue" >
                        Iniciar sesión
                    </Button>
                </Box>
            </Center>
        </div>
    )
}

export default SignUpPage