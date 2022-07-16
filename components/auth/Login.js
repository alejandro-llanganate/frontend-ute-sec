import { Button, Divider, FormControl, Input, InputGroup, InputLeftAddon, InputRightAddon, VStack } from "@chakra-ui/react"
import { useFormik } from 'formik';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useRouter } from "next/router";


const Login = () => {

    const router = useRouter();

    const initialFieldValues = 'xd';
    const formikLogin = useFormik({
        initialValues: {
            email: initialFieldValues,
            password: initialFieldValues
        },
        onSubmit: (credenciales) => {
          router.push('./home');
         }
    })

    return (
        <form  onSubmit={formikLogin.handleSubmit}>
            <VStack spacing='15px'>
                <FormControl width="100%" id="email" >
                    <InputGroup>
                        <InputLeftAddon children={<EmailIcon color='gray.300' />} />
                        <Input name="email" onChange={formikLogin.handleChange} placeholder='Ingresa tu correo electrónico' />
                    </InputGroup>
                </FormControl>
                <FormControl width="100%" id="password" >
                    <InputGroup>
                        <InputLeftAddon children={<LockIcon color='gray.300' />} />
                        <Input name="password" onChange={formikLogin.handleChange} placeholder='Ingresa tu contraseña' type='password' />
                    </InputGroup>
                </FormControl>

                <Button type="submit" width="100%" colorScheme="blue" >
                    Ingresar
                </Button>
                <Divider />

            </VStack>
        </form>
    )
}

export default Login
