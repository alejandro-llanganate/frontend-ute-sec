import { Flex, HStack } from "@chakra-ui/react";
import User from "../components/usuarios/User";
import Header from "../public/components/Header";
import NavBar from "../public/components/NavBar";

const Usuarios = () => {
    return (
        <div>
            <Header />
            <Flex>
                <NavBar active="usuarios" />
                <User />
            </Flex>
        </div>
    )
}

export default Usuarios;