import { Box, Button, Divider, Flex, Stack } from "@chakra-ui/react"
import NavItem from "./NavItem"
import { MdScanner, MdTextSnippet, MdSupervisorAccount } from 'react-icons/md'


const NavBar = () => {
    return (
        <Box width="15%" height="92vh" backgroundColor="#404762">
            <Stack spacing={0}>
                <NavItem icon={MdScanner} path="home" title={'Escaneos'} active />
                <Divider borderColor="#858585" />
                <NavItem icon={MdTextSnippet} path="reportes" title={'Reportes'}  />
                <Divider borderColor="#858585" />
                <NavItem icon={MdSupervisorAccount} path="usuarios" title={'Usuarios'}  />
            </Stack>
        </Box >
    )
}

export default NavBar