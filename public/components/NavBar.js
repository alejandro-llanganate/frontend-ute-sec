import { Box, Button, Divider, Flex, Stack } from "@chakra-ui/react"
import NavItem from "./NavItem"
import { MdScanner, MdTextSnippet, MdSupervisorAccount } from 'react-icons/md'


const NavBar = ({active}) => {
    return (
        <Box width="15%" height="92vh" backgroundColor="#404762">
            <Stack spacing={0}>
                <NavItem icon={MdScanner} path="home" title={'Escaneos'} active={ active === 'escaneos' ? true : false} />
                <Divider borderColor="#858585" />
                <NavItem icon={MdTextSnippet} path="reportes" title={'Reportes'} active={ active === 'reportes' ? true : false}  />
                <Divider borderColor="#858585" />
                <NavItem icon={MdSupervisorAccount} path="usuarios" title={'Usuarios'}  active={ active === 'usuarios' ? true : false}  />
            </Stack>
        </Box >
    )
}

export default NavBar