import { Box, Button, Center, Divider, Heading, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Login from '../components/auth/Login';

const HomePage = () => {

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
                    <Heading mt={5} mb={5} align="center"> UTE-SEC </Heading>
                    <Login />
                    <Divider />
                    <Button onClick={() => {
                        router.push('signup')
                    }} mt={5} type="submit" width="100%" colorScheme="teal" >
                        Crear una cuenta
                    </Button>
                </Box>
            </Center>
        </div>
    )
}

export default HomePage