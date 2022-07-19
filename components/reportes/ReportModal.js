import { Box, Button, Flex, Heading, HStack, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, VStack } from "@chakra-ui/react"
import RiskRow from "./RiskRow"

const ReportModal = ({ isOpen, onClose }) => {
    return (
        <Modal size="3xl" blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent p={5}>
                <ModalHeader color="teal">
                    <VStack mt="15px">
                        <Heading size="lg">Reporte</Heading>
                        <Text fontSize="17px" color="blackAlpha.600">RP-0001</Text>
                    </VStack>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                    <VStack spacing="25px" mb="40px">
                        <Flex width="100%" justifyContent="space-between">
                            <Box>
                                <HStack>
                                    <Text><strong>Página web:</strong></Text>
                                    <Text>
                                        <Link href="www.epn.edu.ec">
                                            www.epn.edu.ec
                                        </Link>
                                    </Text>
                                </HStack>
                            </Box>

                            <Box>
                                <HStack>
                                    <Text><strong>Fecha:</strong></Text>
                                    <Text>
                                        05/03/2022
                                    </Text>
                                </HStack>
                            </Box>
                        </Flex>
                        <Box width="100%" p="20px" shadow="lg" borderWidth="1px" borderRadius="5px">
                            <VStack>
                                <RiskRow />
                                <RiskRow />
                                <RiskRow />
                                <RiskRow />

                            </VStack>
                        </Box>
                    </VStack>

                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ReportModal