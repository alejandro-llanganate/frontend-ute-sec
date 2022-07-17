import React from 'react'
import { Flex, Text, Icon, Link, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function NavItem({ icon, title, active, path }) {

    const router = useRouter();

    return (
        <Flex mt={30} flexDir="column" w="100%" backgroundColor={active ? "#0A2940" : "#404762"}>
            <Link
                p={3}
                _hover={{ textDecor: 'none', backgroundColor: "#0D1F2C" }}
                w="100%"
                onClick={
                    () => {
                        router.push(path)
                    }
                }
            >
                <Flex color="white" >
                    <Icon as={icon} ml={5} boxSize={7} color={active ? "#00FFD1" : "white"} />
                    <Text ml={5} as="b" display="flex">{title}</Text>
                </Flex>
            </Link>
        </Flex>
    )
}