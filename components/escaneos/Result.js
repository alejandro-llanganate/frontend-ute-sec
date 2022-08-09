import { Box, Button, FormControl, HStack, Icon, Input, Table, TableContainer, Tbody, Td, Text, Textarea, Th, Thead, Tr, useToast, VStack } from "@chakra-ui/react"
import { MdSave } from "react-icons/md"
import * as Yup from 'yup';
import axios from 'axios';
import { useFormik } from "formik";
import Cookies from 'js-cookie';
import { useRouter } from "next/router";

const getColor = (severidad) => {
    switch (severidad) {
        case "ALTO":
            return { backgrounColor: "red", color: "white" }
        case "MEDIO":
            return { backgrounColor: "yellow", color: "black" }
        case "BAJO":
            return { backgrounColor: "green", color: "white" }
        default:
            break;
    }
}

async function sendObservation(observacionObjs, scan, idReporte, token) {
    const observacion = {
        observacion: observacionObjs.obs,
        criticidad: scan[`${observacionObjs.tip}`],
        idReport: idReporte,
        riskTipificacion: observacionObjs.tip
      }
    const resp = await axios.post("http://localhost:3000/api/observations/createObservation", observacion,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        },
    )
}

const Result = ({ rol, scan, url, userId }) => {

    const router = useRouter();

    const toast = useToast();
    const token = Cookies.get('token');
    const initialFieldValues = '';

    // Format Validation Schema
    const ReporteUpSchema = Yup.object().shape({
        observacionR2: Yup.string().required(),
        observacionR4: Yup.string().required(),
        observacionR5: Yup.string().required(),
        observacionR8: Yup.string().required(),
        observacionR9: Yup.string().required(),
    });

    const formikReporte = useFormik({
        initialValues: {
            observacionR2: initialFieldValues,
            observacionR4: initialFieldValues,
            observacionR5: initialFieldValues,
            observacionR8: initialFieldValues,
            observacionR9: initialFieldValues,

        },
        validationSchema: ReporteUpSchema,
        onSubmit: (values) => {
            const report = {
                url: url+'',
                date: new Date(),
                idUsuario: userId+''
            }
            axios
                .post(
                    "http://localhost:3000/api/reports/createReport",
                    report,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                )
                .then(
                    async res => {
                        await sendObservation({ obs: values.observacionR2, tip: 'R2' }, scan, res.data.id, token);
                        await sendObservation({ obs: values.observacionR4, tip: 'R4' }, scan, res.data.id, token);
                        await sendObservation({ obs: values.observacionR5, tip: 'R5' }, scan, res.data.id, token);
                        await sendObservation({ obs: values.observacionR8, tip: 'R8' }, scan,  res.data.id, token);
                        await sendObservation({ obs: values.observacionR9, tip: 'R9' }, scan, res.data.id, token);
                        toast({
                            title: 'Reporte registrado',
                            description: `Se han registrado correctamente tu sobservaciones.`,
                            status: 'success',
                            duration: 3000,
                            onCloseComplete: () => {
                                router.push('/home')
                            },
                        });
                    }
                ).catch(
                    err =>
                    {console.log(err);}
                )
        }
    })

    if (scan) {
        return (
            <Box shadow="md" p="20px" borderWidth="1px">
                <form onSubmit={formikReporte.handleSubmit}>
                    <VStack spacing="20px">
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Tipificación</Th>
                                        <Th>Riesgo evaluado</Th>
                                        <Th>Criticidad</Th>
                                        {
                                            rol !== 'USUARIO' ?
                                                <Th>Observaciones</Th>
                                                :
                                                <div></div>
                                        }
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
                                        <Td backgroundColor={getColor(scan.R2).backgrounColor} color={getColor(scan.R2).color}>
                                            <Text>
                                                {scan.R2.toUpperCase()}
                                            </Text>
                                        </Td>
                                        {
                                            rol !== 'USUARIO' ?
                                                <Td>
                                                    <FormControl width="100%" id="observacionR2" isInvalid={formikReporte.errors.observacionR2} >
                                                        <Textarea onChange={formikReporte.handleChange} placeholder="Ingresar sus observaciones">
                                                        </Textarea>
                                                    </FormControl>
                                                </Td> :
                                                ""
                                        }
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
                                        <Td backgroundColor={getColor(scan.R4).backgrounColor} color={getColor(scan.R4).color}>
                                            <Text>
                                                {scan.R4.toUpperCase()}
                                            </Text>
                                        </Td>
                                        {
                                            rol !== 'USUARIO' ?
                                                <Td>
                                                    <FormControl width="100%" id="observacionR4" isInvalid={formikReporte.errors.observacionR4} >
                                                        <Textarea onChange={formikReporte.handleChange} placeholder="Ingresar sus observaciones">
                                                        </Textarea>
                                                    </FormControl>
                                                </Td> :
                                                ""
                                        }
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
                                        <Td backgroundColor={getColor(scan.R5).backgrounColor} color={getColor(scan.R5).color}>
                                            <Text>
                                                {scan.R5.toUpperCase()}
                                            </Text>
                                        </Td>
                                        {
                                            rol !== 'USUARIO' ?
                                                <Td>
                                                    <FormControl width="100%" id="observacionR5" isInvalid={formikReporte.errors.observacionR5} >
                                                        <Textarea onChange={formikReporte.handleChange} placeholder="Ingresar sus observaciones">
                                                        </Textarea>
                                                    </FormControl>
                                                </Td> :
                                                ""
                                        }
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
                                        <Td backgroundColor={getColor(scan.R8).backgrounColor} color={getColor(scan.R8).color}>
                                            <Text>
                                                {scan.R8.toUpperCase()}
                                            </Text>
                                        </Td>
                                        {
                                            rol !== 'USUARIO' ?
                                                <Td>
                                                    <FormControl width="100%" id="observacionR8" isInvalid={formikReporte.errors.observacionR8} >
                                                        <Textarea onChange={formikReporte.handleChange} placeholder="Ingresar sus observaciones">
                                                        </Textarea>
                                                    </FormControl>
                                                </Td> :
                                                ""
                                        }
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
                                        <Td backgroundColor={getColor(scan.R9).backgrounColor} color={getColor(scan.R9).color}>
                                            <Text>
                                                {scan.R9.toUpperCase()}
                                            </Text>
                                        </Td>
                                        {
                                            rol !== 'USUARIO' ?
                                                <Td>
                                                    <FormControl width="100%" id="observacionR9" isInvalid={formikReporte.errors.observacionR9} >
                                                        <Textarea onChange={formikReporte.handleChange} placeholder="Ingresar sus observaciones">
                                                        </Textarea>
                                                    </FormControl>
                                                </Td> :
                                                ""
                                        }
                                    </Tr>

                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Button type="submit" display={rol === 'USUARIO' ? 'none' : 'block'} colorScheme="blue">
                            <HStack spacing="15px">
                                <Icon as={MdSave} />
                                <Text>Guardar</Text>
                            </HStack>
                        </Button>
                    </VStack>
                </form>
            </Box>
        )
    } else {
        return (
            <div>
                <Text>Cargando...</Text>
            </div>
        )
    }

}

export default Result