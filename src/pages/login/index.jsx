// import { Flex, Text, Button, Card, Inset, Strong } from '@radix-ui/themes';
import Style from './login.module.css'
import { FaBeer } from 'react-icons/fa';
import {useState, useEffect} from 'react'
import { useRouter } from "next/router";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
                <h1>SiCoDa - sistema de Coleta de Dados</h1>
              </div>
                
            </div>

            <div className={Style.divFormDir}>
              {/* <div className={transicao ? Style.cardFormDir : Style.cardFormDir2  }>
                <Button className={Style.botaoDeEnviar} onClick={Logar}>Entrar</Button>
              </div> */}
               <Card className={transicao ? Style.cardFormDir : Style.cardFormDir2  }>
                
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" onClick={Logar}>Entrar</Button>
                </Card.Body>
              </Card>
            </div>
              
                
          </div>

       
        </>
    )
}