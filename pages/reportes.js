import { Flex, HStack } from "@chakra-ui/react";
import Report from "../components/reportes/Report";
import Header from "../public/components/Header";
import NavBar from "../public/components/NavBar";

const Reportes = () => {
    return (
        <div>
            <Header />
            <Flex>
                <NavBar active="reportes" />
                <Report />
            </Flex>
        </div>
    )
}

export default Reportes;