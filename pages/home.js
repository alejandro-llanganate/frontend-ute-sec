import { Flex, HStack } from "@chakra-ui/react";
import Result from "../components/escaneos/Result";
import Scanner from "../components/escaneos/Scanner";
import Header from "../public/components/Header";
import NavBar from "../public/components/NavBar";

const Home = () => {
    return (
        <div>
            <Header />
            <Flex>
                <NavBar active="escaneos" />
                <Scanner />
            </Flex>
        </div>
    )
}

export default Home;