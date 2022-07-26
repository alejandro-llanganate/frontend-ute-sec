import { Box, Button, Flex, Heading, HStack, Icon, Input, InputGroup, InputLeftElement, Text, useDisclosure, VStack } from "@chakra-ui/react"
import { MdScanner } from "react-icons/md"
import { LinkIcon } from '@chakra-ui/icons'
import { useRouter } from "next/router"
import ResultModal from "./ResultModal"
import * as Yup from 'yup';
import { useFormik } from "formik"


const Scanner = ({rol}) => {

    const router = useRouter();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialFieldValues = '';

    const ScannerSchema = Yup.object().shape(
        {
            url: Yup.string()
                .required('Campo obligatorio'),
        }
    )

    const formikScanner = useFormik({
        initialValues: {
            url: initialFieldValues,
        },
        validationSchema: ScannerSchema,
        onSubmit: (credenciales) => {
            onOpen();
        }
    })

    return (
        <Box width="100%" >
            <HStack color="#A5A5A5" p="40px">
                <Icon as={MdScanner} mr="4px" />
                <Text>Escaneos /</Text>
            </HStack>
            <Flex mt="5%" justifyContent="center">
                <VStack>
                    <ResultModal rol={rol} isOpen={isOpen} onClose={onClose} />
                    <Box shadow="md" background="white" p="100px" borderWidth="1px" borderRadius="lg" >
                        <VStack spacing="20px" >
                            <Heading>
                                <HStack>
                                    <Text>REALIZAR UN NUEVO </Text>
                                    <Text color="teal">ESCANEO</Text>
                                </HStack>
                            </Heading>
                            <Text>Ingresa la dirección web o URL de la página a escanear.</Text>
                            <form onSubmit={formikScanner.handleSubmit}>
                                <VStack spacing="30px">
                                    <InputGroup width="100%" isInvalid={formikScanner.errors.url && formikScanner.touched.url}>
                                        <InputLeftElement
                                            pointerEvents='none'
                                            
                                            children={<LinkIcon color='gray.300' />}
                                        />
                                        <Input name="url" onChange={formikScanner.handleChange} required={true} width="500px" type='text' placeholder='https://www.example.com' />
                                    </InputGroup>
                                    <Button type="submit" colorScheme="teal">
                                        Escanear
                                    </Button>
                                </VStack>
                            </form>
                        </VStack>
                    </Box>
                </VStack>
            </Flex>
        </Box>
    )
}

export default Scanner;