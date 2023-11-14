import Layout from '../../../components/index';
import Style from './cadastro.module.css';
import Form from 'react-bootstrap/Form';
import {useState, useEffect, useRef} from 'react';
import { useRouter } from "next/router";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaChevronLeft, FaRegDotCircle, FaRegCheckSquare, FaQuestionCircle, FaPhone } from "react-icons/fa";
import { FaT, FaSort } from "react-icons/fa6";


export default function CreateForm(){

    const router = useRouter();
    const [transicao, setTransicao] = useState(false)
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    //Variaveis do formulario
    const [nomeTitulo, setNomeTitulo] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [descri, setDescri] = useState('');

    //Lista de questão
    const [lista, setLista] = useState(['']);
  
  
    useEffect(() => {
      // Ativa a animação após o componente ser montado no cliente
      setTransicao(true);
      if(nome == ''){
        inputRef.current.focus();
      }
      if(nome !== '' && descricao == ''){
        inputRef2.current.focus();
      }

    }, []);


    const adicionarElemento = () => {
        const novoElemento = 'Questão'; // Novo elemento a ser adicionado
    
        // Criar uma nova lista com o novo elemento adicionado ao final
        const novaLista = [...lista, novoElemento];
    
        // Atualizar o estado com a nova lista
        setLista(novaLista);
      };



    const changeNome=(evt)=>(
        setNomeTitulo(evt.target.value)
    )
    const changeDescricao=(evt)=>(
        setDescricao(evt.target.value)
    )
    function Seguir(){
        setNome(nomeTitulo)
    }

    function SeguirCreat(){
        setDescri(descricao)
    }

    const Voltar = () => {
        window.history.back();
      };




    return(
        <Layout>
          
{/* ===================================================Introdução ao formulário============================================ */}
                {nome == '' &&
                  <div className={Style.divFundo}>
                    <div className={Style.divTituloForm} >
                    <h5 className={transicao ? Style.nomeFormulario : Style.nomeFormulario2  }>Você precisa de um títuto para seu formulário</h5>
                        <div className={Style.divFormNome}>
                            <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" ref={inputRef} onChange={changeNome}/>
                            <Button variant="primary" className={Style.botaoSeguir1} onClick={()=>Seguir()}>Prosseguir</Button>
                        </div>
                        
                    </div>
                    </div>

                }
                {nome && descri == '' &&

                    <div className={Style.divFundo}>
                    <div className={Style.divTituloForm} >
                    <h5 className={transicao ? Style.nomeFormulario : Style.nomeFormulario2  }>Descreva do que se trata esse formulário</h5>
                        <div className={Style.divFormNome}>
                            <Form.Control as="textarea" rows={3} id="inputPassword5" aria-describedby="passwordHelpBlock" ref={inputRef2} onChange={changeDescricao}/>
                            <Button variant="primary" className={Style.botaoSeguir1} onClick={()=>SeguirCreat()}>Prosseguir</Button>
                        </div>
                        
                    </div>
                    </div>


                }

{/* ===================================================Menu lateral============================================ */}
            {descri &&
              
              <div className={Style.divCriacaoForm}>

                 <div className={Style.divEsquerda}>
                 <h5 className={Style.botaoVoltar} onClick={Voltar}><FaChevronLeft/> Voltar</h5>
                 <Container>
                    <Row>
                        <Col className={Style.quadradoOp}><FaT className={Style.iconeOp}/><h5>Texto</h5></Col>
                        <Col className={Style.quadradoOp}><FaRegDotCircle className={Style.iconeOp}/><h5>Radio</h5> </Col>
                    </Row>
                    <Row>
                        <Col className={Style.quadradoOp}><FaRegCheckSquare className={Style.iconeOp}/><h5>Check</h5></Col>
                        <Col className={Style.quadradoOp}><FaSort className={Style.iconeOp}/><h5>Número</h5></Col>
                    </Row>
                    <Row>
                        <Col className={Style.quadradoOp}><FaPhone className={Style.iconeOp}/><h5>Telefone</h5></Col>
                        <Col className={Style.quadradoOp}><FaSort className={Style.iconeOp}/><h5>Número</h5></Col>
                    </Row>
                    <Row>
                        <Col >
                        <Button variant="success" className={Style.BotaoEnviar}>Salvar modelo</Button>
                        <Button variant="primary" className={Style.BotaoEnviar}>Enviar formulário</Button>
                        </Col>
                       
                        {/* <Col className={Style.quadradoOp}>6</Col> */}
                    </Row>
                </Container>                    

                 </div>
                 <div className={Style.divDireita}>
{/* ===================================================Página de formulário============================================ */}

                <div className={Style.paginaFormulario}>
                    <div className={Style.margemForm}>
                        <div className={Style.divNomeTitulo}>
                            <h1><b>{nome}</b></h1>
                        </div>
                        
                        <div className={Style.DivEstiloDescricao}>
                            <h4>{descri}</h4>
                        </div>
                        <div className={Style.divDadosPessoais}>
                            <h5>Qual seu nome:</h5>
                        </div>


                        {lista.map((item, index) => (
                                // <h5 key={index}>{item}</h5>
                                <div className={Style.divQuestao} key={index}>
                                    <h5>Questão - {index+1}</h5>
                                    
                                </div>
                        ))}
                        
                        <Button variant="warning" className={Style.BotaoAdd} onClick={adicionarElemento}>Add Questão <FaQuestionCircle/></Button>
                    </div>

                  
                </div>


                 </div>

             </div>
         
            
           
             }
        </Layout>

        
        
    )
}