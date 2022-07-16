import { Button, Flex } from "@chakra-ui/react"
import NavItem from "./NavItem"

const NavBar = () => {
    return (
        <div>
            <Flex >
                <NavItem title={'Sistema Operativo y Navegador no compatibles con el aplicativo EE405R00X4'} active />
            </Flex>
        </div >
    )
}

export default NavBar