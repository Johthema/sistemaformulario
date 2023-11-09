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

    <Card size="2" style={{ maxWidth: 240 }}>
  <Inset clip="padding-box" side="top" pb="current">
    <img
      src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      alt="Bold typography"
      style={{
        display: 'block',
        objectFit: 'cover',
        width: '100%',
        height: 140,
        backgroundColor: 'var(--gray-5)',
      }}
    />
  </Inset>
  <Text as="p" size="3">
    <Strong>Typography</Strong> is the art and technique of arranging type to
    make written language legible, readable and appealing when displayed.
  </Text>
</Card>
       
        </>
    )
}