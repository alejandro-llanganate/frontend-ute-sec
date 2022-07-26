import { Box, Button, Flex, Heading, HStack, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, VStack } from "@chakra-ui/react"
import Result from "./Result"

const ResultModal = ({ isOpen, onClose, rol }) => {
    return (
        <Modal size="6xl" blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
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
                    <Result rol={rol} />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ResultModal