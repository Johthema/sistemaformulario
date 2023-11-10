import { Flex, Text, Button, Card, Inset, Strong } from '@radix-ui/themes';
import Style from './login.module.css'
import { FaBeer } from 'react-icons/fa';
import {useState, useEffect} from 'react'
import { useRouter } from "next/router";

export default function Login(){
  const router = useRouter();
  const [transicao, setTransicao] = useState(false)



  useEffect(() => {
    // Ativa a animação após o componente ser montado no cliente
    setTransicao(true);

  }, []);


  function Logar(){
    
    router.push('/home')
   
    
  }

    return (
        <>
          <div className={Style.divCard}>
            <div className={Style.divFormEsq}>
              <div className={Style.cardFormEsq}>
                <h1>Sistema de formulários de pesquisa</h1>
              </div>
                
            </div>

            <div className={Style.divFormDir}>
              <div className={transicao ? Style.cardFormDir : Style.cardFormDir2  }>
                <Button className={Style.botaoDeEnviar} onClick={Logar}>Entrar</Button>
              </div>
            </div>
              
                
          </div>

       
        </>
    )
}