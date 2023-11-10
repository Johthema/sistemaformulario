// import { Flex, Text, Button, Card, Inset, Strong } from '@radix-ui/themes';
import Style from './login.module.css'
import { FaBeer, FaLock } from 'react-icons/fa';
import {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


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
                <h1><b className={Style.tituloLogo}>SiCoDa</b> - sistema de Coleta de Dados</h1>
              </div>
                
            </div>

            <div className={Style.divFormDir}>
              {/* <div className={transicao ? Style.cardFormDir : Style.cardFormDir2  }>
                <Button className={Style.botaoDeEnviar} onClick={Logar}>Entrar</Button>
              </div> */}
               <Card className={transicao ? Style.cardFormDir : Style.cardFormDir2  }>
                
                <Card.Body>
                  <Card.Title><FaLock className={Style.iconeCadeado} /></Card.Title>
                  <div className={Style.divTituloCardLogin}>
                      <h2 className={Style.titulologin}>Quem é você?</h2>
                      <h4 className={Style.subtitulologin}>Se identifique para fazer login</h4>
                  </div>
                  <hr></hr>
                  <Card.Text className={Style.entradaSenhaEmail}>

                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingPassword" label="Senha">
                    <Form.Control type="password" placeholder="Senha" />
                  </FloatingLabel>
                   <div className={Style.divEsqueciSenha}>
                      <span className={Style.spanEsquecisenha}>Esqueci senha</span>
                   </div>
                  </Card.Text>
                  <div className={Style.divBotaoEntrar}>
                    <Button variant="primary" onClick={Logar} className={Style.botaoEntrar}>Entrar</Button>
                  </div>
                  
                </Card.Body>
              </Card>
            </div>
              
                
          </div>

       
        </>
    )
}