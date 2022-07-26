import { Flex, HStack, Text } from "@chakra-ui/react";
import User from "../components/usuarios/User";
import Header from "../public/components/Header";
import NavBar from "../public/components/NavBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'



const Usuarios = () => {

    const [user, setUsuario] = useState({});

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
      })();
    }, []);


    if(user){
        return (
            <div>
                <Header user={user}/>
                <Flex>
                    <NavBar rol={user.rol} active="usuarios" />
                    <User />
                </Flex>
            </div>
        )
    }else{
        return(
            <Text>
            Cargando información....
        </Text>
        )
    } 
   
}

export default Usuarios;