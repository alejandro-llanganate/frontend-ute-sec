import { Button, Divider, FormControl, Input, VStack } from "@chakra-ui/react"
import { useFormik } from 'formik';
import { useRouter } from "next/router";


const Signup = () => {

    const router = useRouter();

    const initialFieldValues = '';
    const formikLogin = useFormik({
        initialValues: {
            name: initialFieldValues,
            lastname: initialFieldValues,
            email: initialFieldValues,
            password: initialFieldValues,
            passwordRepeat: initialFieldValues
        },
        onSubmit: (values) => { 
            router.push('/login')
        }
    })

    return (
        <form onSubmit={formikLogin.handleSubmit}>
            <VStack spacing='15px'>
                <FormControl width="100%" id="nombreUsuario" >
                    <Input name="name" onChange={formikLogin.handleChange} placeholder='Ingresa tu nombre' />
                </FormControl>
                <FormControl width="100%" id="apellidoUsuario" >
                    <Input name="lastanem" onChange={formikLogin.handleChange}  placeholder='Ingresa tu apellido' />
                </FormControl>
                <FormControl width="100%" id="emailUsuario" >
                    <Input name="email" onChange={formikLogin.handleChange}  placeholder='Ingresa tu correo electrónico' />
                </FormControl>
                <FormControl width="100%" id="passwordUsuario" >
                    <Input name="password" onChange={formikLogin.handleChange}  placeholder='Ingresa una contraseña' />
                </FormControl>
                <FormControl width="100%" id="passwordRepeatUsuario" >
                    <Input name="passwordRepeat" onChange={formikLogin.handleChange}  placeholder='Ingresa nuevamente la contraseña' />
                </FormControl>
                <Button type="submit" width="100%" colorScheme="teal" >
                    Crear una cuenta
                </Button>
                <Divider />

            </VStack>
        </form>
    )
}

export default Signup
