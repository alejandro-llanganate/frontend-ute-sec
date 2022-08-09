import { Box, Button, Flex, Heading, HStack, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, Textarea, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import Result from "./Result"

const ResultModal = ({ scan, userId, url, isOpen, onClose, rol }) => {

    if(scan){
        return (
            <Modal size="6xl" blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent p={5}>
                    <ModalHeader color="teal">
                        <VStack mt="15px">
                            <Heading size="lg">Reporte</Heading>
                            <Text fontSize="17px" color="blackAlpha.600">{url}</Text>
                        </VStack>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Result url={url} scan={scan} userId={userId} rol={rol} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        )    
    }else{
        return (
            <Modal size="6xl" blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent p={5}>
                    <ModalCloseButton />
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                        />
                </ModalContent>
            </Modal>
        )    
    }
}

export default ResultModal