import { Button, Divider, FormControl, HStack, Input, InputGroup, InputLeftAddon, Text, useToast, VStack } from "@chakra-ui/react"
import { useFormik } from 'formik';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useRouter } from "next/router";
import * as Yup from 'yup';
import axios from "axios";
import Cookies from 'js-cookie'
import React from "react";



const Login = () => {

    const router = useRouter();
    const toast = useToast();
    const [showNoAuthorized, setShowNoAuthorized] = React.useState(false);


    const initialFieldValues = '';

    const LoginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .required('Campo obligatorio'),
            password: Yup.string().required('Campo obligatorio')
        }
    )

    const formikLogin = useFormik({
        initialValues: {
            email: initialFieldValues,
            password: initialFieldValues
        },
        validationSchema: LoginSchema,
        onSubmit: (credenciales) => {
            console.log('credenciales', credenciales)
            axios
                .post("http://localhost:3000/auth/login", credenciales, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(resp => {

                    if (resp.data.access_token) {
                        setShowNoAuthorized(false);
                        toast({
                            title: 'Se ha auntenticado correctamente',
                            description: `Bienvenido al sistema Poli - Collaboration.`,
                            status: 'success',
                            duration: 2000,
                        });
                        Cookies.set('token', resp.data.access_token, { expires: 1 })
                        router.push('./home');
                    } else {
                        setShowNoAuthorized(true);
                    }
                })
                .catch((err) => {
                    setShowNoAuthorized(true);

                });
        }
    })

    return (
        <form onSubmit={formikLogin.handleSubmit}>
            <VStack spacing='15px'>
                <FormControl width="100%" id="email">
                    <InputGroup isInvalid={formikLogin.errors.email && formikLogin.touched.email}>
                        <InputLeftAddon children={<EmailIcon color='gray.300' />} />
                        <Input name="email" onChange={formikLogin.handleChange} placeholder='Ingresa tu correo electrónico' />
                    </InputGroup>
                </FormControl>
                <Text fontSize="xs" color="red.500">
                    {formikLogin.errors.email}
                </Text>
                <FormControl width="100%" id="password" >
                    <InputGroup isInvalid={formikLogin.errors.password && formikLogin.touched.password}>
                        <InputLeftAddon children={<LockIcon color='gray.300' />} />
                        <Input name="password" onChange={formikLogin.handleChange} placeholder='Ingresa tu contraseña' type='password' />
                    </InputGroup>
                </FormControl>
                <Text fontSize="xs" color="red.500">
                    {formikLogin.errors.password}
                </Text>
                <Button type="submit" width="100%" colorScheme="blue" >
                    Ingresar
                </Button>
                {/* Recordar Credenciales */}
                {showNoAuthorized ? (
                    <HStack mt={5} mb={3} px={8}>
                        <Text fontSize="xs" color="red.500">
                            Por favor, proporcione credenciales válidas.
                        </Text>
                    </HStack>
                ) : (
                    ''
                )}
                <Divider />

            </VStack>
        </form>
    )
}

export default Login
