
import { Button, Divider, FormControl, Input, Text, useToast, VStack } from "@chakra-ui/react"
import { useFormik } from 'formik';
import { useRouter } from "next/router";
import * as Yup from 'yup';
import axios from 'axios';


const Signup = () => {

    const toast = useToast();


    // Router for paths
    const router = useRouter();

    // Initial Values
    const initialFieldValues = '';

    // Format Validation Schema
    const SignUpSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Prueba con un nombre más largo.').max(70, 'Tu nombre debe ser más corto.').required('Campo obligatorio'),
        lastname: Yup.string()
            .min(2, 'Prueba con un apellido más largo.')
            .max(70, 'Tu nombre debe ser más largo.')
            .required('Campo obligatorio'),
        email: Yup.string()
            .email('Dirección de correo electrónico no válida')
            .required('Campo obligatorio'),
        password: Yup.string().required('Campo obligatorio'),
        passwordRepeat: Yup.string()
            .required('Campo obligatorio')
            .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
    });

    // Formik config form Login Form
    const formikLogin = useFormik({
        initialValues: {
            name: initialFieldValues,
            lastname: initialFieldValues,
            email: initialFieldValues,
            password: initialFieldValues,
            passwordRepeat: initialFieldValues
        },
        validationSchema: SignUpSchema,
        onSubmit: (values) => {
            const user = {
                name: values.name,
                lastname: values.lastname,
                email: values.email,
                password: values.password,
                rol: 'USUARIO',
            };
            axios
                .post(
                    "http://localhost:3000/api/user/createUser",
                    user,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                )
                .then(
                    res => {
                        toast({
                            title: 'Usuario registrado',
                            description: `El usuario ${user.name} ${user.lastname} ahora puede iniciar sesión.`,
                            status: 'success',
                            duration: 4000,
                            onCloseComplete: () => {
                                router.push('/login')
                            },
                        });
                    }
                )
        }
    })

    return (
        <form onSubmit={formikLogin.handleSubmit}>
            <VStack spacing='15px'>
                <FormControl width="100%" id="nombreUsuario" isInvalid={formikLogin.errors.name && formikLogin.touched.name} >
                    <Input name="name" onChange={formikLogin.handleChange}  placeholder='Ingresa tu nombre' />
                </FormControl>
                <Text fontSize="xs" color="red.500">
                    {formikLogin.errors.name}
                </Text>
                <FormControl width="100%" id="apellidoUsuario" isInvalid={formikLogin.errors.lastname && formikLogin.touched.lastname} >
                    <Input name="lastname" onChange={formikLogin.handleChange} placeholder='Ingresa tu apellido' />
                </FormControl>
                <Text fontSize="xs" color="red.500">
                    {formikLogin.errors.lastname}
                </Text>
                <FormControl width="100%" id="emailUsuario" isInvalid={formikLogin.errors.email && formikLogin.touched.email}>
                    <Input name="email" onChange={formikLogin.handleChange} placeholder='Ingresa tu correo electrónico' />
                </FormControl>
                <Text fontSize="xs" color="red.500">
                    {formikLogin.errors.email}
                </Text>
                <FormControl width="100%" id="passwordUsuario" isInvalid={formikLogin.errors.password && formikLogin.touched.password}>
                    <Input type="password" name="password" onChange={formikLogin.handleChange} placeholder='Ingresa una contraseña' />
                </FormControl>
                <Text fontSize="xs" color="red.500">
                    {formikLogin.errors.password}
                </Text>
                <FormControl width="100%" id="passwordRepeatUsuario" isInvalid={formikLogin.errors.passwordRepeat && formikLogin.touched.passwordRepeat} >
                    <Input type="password" name="passwordRepeat" onChange={formikLogin.handleChange} placeholder='Ingresa nuevamente la contraseña' />
                </FormControl>
                <Text fontSize="xs" color="red.500">
                    {formikLogin.errors.passwordRepeat}
                </Text>
                <Button type="submit" width="100%" colorScheme="teal" >
                    Crear una cuenta
                </Button>
                <Divider />

            </VStack>
        </form>
    )
}

export default Signup
