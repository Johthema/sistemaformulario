import { Flex, Text, Button, Card, Inset, Strong } from '@radix-ui/themes';
import Style from './login.module.css'
import { FaBeer } from 'react-icons/fa';
import { useRouter } from "next/router"

export default function Login(){
  const router = useRouter();

  function Logar(){
    router.push('/home')
  }


    return (
        <>
         <Flex direction="column" gap="2">
      <Text> <h3>Tela de login</h3></Text>
      <FaBeer/>
      <Button className={Style.botaoDeEnviar} onClick={Logar}>Let's go</Button>
    </Flex>


       
        </>
    )
}