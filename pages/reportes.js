import Report from "../components/reportes/Report";
import Header from "../public/components/Header";
import NavBar from "../public/components/NavBar";
import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'

const Reportes = () => {

    const [user, setUsuario] = useState({});
    const [reports, setReports] = useState({});

    const router = useRouter();
  
    useEffect(() => {
      if (!Cookies.get('token')) {
        router.push('signup');
      }
      (async function () {
        const token = document.cookie.split('=')[1];
        const resp = await fetch('http://localhost:3000/auth/getuser', {
          headers: new Headers({
            Authorization: 'Bearer ' + token,
          }),
        }).catch((error) => {
          router.push('signup');
          console.error('Error:', error);
        });
        const user = await resp.json();
        setUsuario(user);
        const respReports = await fetch(`http://localhost:3000/api/reports/getReportsByUserId/${user.id}`, {
          headers: new Headers({
            Authorization: 'Bearer ' + token,
          }),
        }).catch((error) => {
          router.push('signup');
          console.error('Error:', error);
        });
        const reports = await respReports.json();
        setReports(reports);
        
      })();
    }, []);

    if(user){
        return (
            <div>
                <Header user={user}/>
                <Flex>
                    <NavBar rol={user.rol} active="reportes" />
                    { reports ? <Report reportes={reports} /> : <Text>No hay reportes</Text>}
                </Flex>
            </div>
        )
    }else{
        return(
            <div>Cargando información</div>
        )
    }
}

export default Reportes;