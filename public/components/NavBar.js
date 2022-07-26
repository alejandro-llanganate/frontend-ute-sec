import { Box, Button, Divider, Flex, Stack, Text } from "@chakra-ui/react"
import NavItem from "./NavItem"
import { MdScanner, MdTextSnippet, MdSupervisorAccount } from 'react-icons/md'
import { useEffect, useState } from "react"


const NavBar = ({ active, rol }) => {

    const [visibleScan, setVisibleScan] = useState(false);
    const [visibleReports, setVisibleReports] = useState(false);
    const [visibleUsers, setVisibleUsers] = useState(false);

    useEffect(() => {
        switch (rol) {
            case "USUARIO":
                setVisibleScan(true);
                break;
            case "AUDITOR":
                setVisibleScan(true);
                setVisibleReports(true);
                break;
            case "ADMINISTRADOR":
                setVisibleScan(true);
                setVisibleReports(true);
                setVisibleUsers(true);
                break;
            default:
                break;
        }

    })

    return (
        <Box width="15%" height="92vh" backgroundColor="#404762">
            <Stack spacing={0}>
                {visibleScan ?
                    <>
                        <NavItem icon={MdScanner} path="home" title={'Escaneos'} active={active === 'escaneos' ? true : false} />
                        <Divider borderColor="#858585" />
                    </>
                    : ""}
                {visibleReports ?
                    <>
                        <NavItem icon={MdTextSnippet} path="reportes" title={'Reportes'} active={active === 'reportes' ? true : false} />
                        <Divider borderColor="#858585" />
                    </>
                    : ""}
                {visibleUsers ?
                    <>
                        <NavItem icon={MdSupervisorAccount} path="usuarios" title={'Usuarios'} active={active === 'usuarios' ? true : false} />
                        <Divider borderColor="#858585" />
                    </>
                    : ""}

            </Stack>
        </Box >
    )
}

export default NavBar