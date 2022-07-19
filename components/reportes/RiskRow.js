import { Box, Flex, Text, Textarea } from "@chakra-ui/react"

const RiskRow = ({ risk, severidad, severidadColor, descripcion }) => {
    return (
        <Box p={5} width="100%" >
            <Flex width="100%" justifyContent="space-between" alignItems="center">
                <Text>
                    <strong>
                        R2 - No existe encriptamiento de los datos
                    </strong>
                </Text>
                <Text>
                    <Text fontSize="12px" p="2" borderRadius="10px" color="white" backgroundColor="#123456">
                        {severidad} ALTO
                    </Text>
                </Text>
            </Flex>
            <Textarea mt={5}>
                {
                    !descripcion ? 
                    'Laboris laboris occaecat nulla laboris elit. Voluptate consectetur sunt eu sunt. Sint excepteur duis et incididunt voluptate laborum dolor elit laboris dolore ea.' : 
                    ''
                }
            </Textarea>
        </Box>
    )
}

export default RiskRow