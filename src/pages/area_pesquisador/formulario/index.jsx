import Layout from '../../../components/index';
import Style from './formulario.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaSearch } from "react-icons/fa";
import {ValidarCPF} from '../../api/validacaoCPF.js'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

export default function Formulario(){
    const [lista, setLista] = useState(['']);
    const [perguntas, setPerguntas] = useState([
        'Qual seu nome?',
        'Qual seu CPF?',
        'Qual seu sexo?',
        'Qual seu telefone celular? 929XXXX-XXXX',
        'Qual sua data de nascimento? dd/mm/aaaa',
        'Qual seu Instagram',
        'Qual seu Facebook',
        'Qual seu Bairro?',
        'Em 2024 teremos eleições para Prefeito e Vereadores. Se a eleição para PREFEITO fosse hoje, em quem o(a) sr(a) votaria para Prefeito de MANAUS? (ESPONTÂNEA – CASO NÃO ENCONTRE NA LISTA MARQUE “OUTROS”) '
        
    ]);
    const [indicePerguntaAtual, setIndicePerguntaAtual] = useState(0); // Estado para controlar o índice da pergunta atual
    const [isFlipped, setIsFlipped] = useState(false);
    const [now, setNow] = useState(0) ;
    const [transicao, setTransicao] = useState(false);
    const [show, setShow] = useState(false);
    const [showSucesso, setShowSucesso] = useState(false);
    const [campoVazio, setCampoVazio] = useState(false);

    const [cpfInv, setCpfInv] = useState(false)

    const [disco, setDisco] = useState(false)

    const handleClose = () =>{
        
        setShow(false);
        setShowSucesso(false)
    } 
    //variaveis de validação de CPF
    // const cpf = '123.456.789-09';
    // const cpfValido = validarCPF(cpf);

    // const handleShow = () => setShow(true);
    //Varivaeis dados de usuario
    const [nomeEntrevistado, setNomeEntrevistado] = useState('');
    const [cpfEntrevistado, setCpfEntrevistado] = useState('');
    const [sexo, setSexo] = useState('masculino');
    const [telefoneEntrevistado, setTelefoneEntrevistado] = useState('');
    const [nascimentoEntrevistado, setNascimentoEntrevistado] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [bairro, setBairro] = useState('');
    const [questao9,setQuestao9] = useState('');

    const [respostaAtual, setRespostaAtual] = useState(''); // Estado para controlar a resposta atual

    const adicionarElemento = () => {
        if (respostaAtual.trim() === '') {
            setCampoVazio(true);
        } else {
            setCampoVazio(false);
            // Execute outras ações que você deseja fazer quando o campo não estiver vazio
            // Por exemplo, enviar o formulário, adicionar elementos, etc.

      // Verifica se a pergunta atual é referente ao CPF
      if (indicePerguntaAtual === 1) { // Supondo que o CPF seja a segunda pergunta, como no seu código
        console.log("entrou na funcao")
        const cpfValido = ValidarCPF(respostaAtual); // Valida o CPF inserido
        if (!cpfValido) {
          // Se o CPF for inválido, faça algo, por exemplo, exiba um aviso
          console.log('CPF inválido!');
          setCpfInv(true)
          return; // Não avança para a próxima pergunta se o CPF for inválido
        }
      }


      if (indicePerguntaAtual === 7){
        setDisco(true)
      }

        // Verificar se ainda há perguntas não respondidas
        if (indicePerguntaAtual < perguntas.length - 1) {
            setIndicePerguntaAtual(indicePerguntaAtual + 1); // Atualizar o índice da próxima pergunta
           
            setTransicao(!transicao)

            const cont = 10 + now
            setNow(cont);

        }  if(indicePerguntaAtual == perguntas.length - 1){
            setShow(true)
        } else {
            // Aqui você pode decidir o que fazer quando todas as perguntas forem respondidas
            console.log('Todas as perguntas foram respondidas.');


        }
       
    }

        setRespostaAtual('');
      };

      const respostaQuestao=(evt) =>{
        if(indicePerguntaAtual == 0){
            setNomeEntrevistado(evt.target.value);
            setRespostaAtual(evt.target.value);
        } else if(indicePerguntaAtual == 1){
            let value = evt.target.value;
            value = value.replace(/\D/g, '');
            setCpfEntrevistado(value);
            setRespostaAtual(value);
        } else if(indicePerguntaAtual == 2){
            setSexo(evt.target.value);
            setRespostaAtual(evt.target.value);
        } else if(indicePerguntaAtual == 3){
            const numericValue = evt.target.value.replace(/[^0-9]/g, '');
            setTelefoneEntrevistado(numericValue);
            setRespostaAtual(numericValue);
        } else if(indicePerguntaAtual == 4){
           
            setNascimentoEntrevistado(evt.target.value);
            setRespostaAtual(evt.target.value);
        } else if(indicePerguntaAtual == 5){
            setInstagram(evt.target.value);
            setRespostaAtual(evt.target.value);
        }else if(indicePerguntaAtual == 6){
            setFacebook(evt.target.value);
            setRespostaAtual(evt.target.value);
        }else if(indicePerguntaAtual == 7){
            setBairro(evt.target.value);
            setRespostaAtual(evt.target.value);
        }else if(indicePerguntaAtual == 8){
            setQuestao9(evt.target.value);
            setRespostaAtual(evt.target.value);
        }
      }

      console.log("nome do entrevistado: ", nomeEntrevistado)
      console.log("cpf do entrevistado: ", cpfEntrevistado)
      console.log("telefone do entrevistado: ", telefoneEntrevistado)
      console.log("sexo do entrevistado: ", sexo)
      console.log("Nascimento do entrevistado: ", nascimentoEntrevistado)
      console.log("instagram do entrevistado: ", instagram)
      console.log("facebook do entrevistado: ",facebook)
      console.log("bairro do entrevistado: ",bairro)
      console.log("candidato do entrevistado: ",questao9)
      


     const enviarFormulario = () => {
        setShow(false);
        setShowSucesso(true)
        
     }

     const novoFormulario = () =>{
        setShowSucesso(true);
        window.location.reload()
     }

    return (
        <Layout>
            <br/>
            <ProgressBar now={now} label={`${now}%`} />

            {lista.map((item, index) => (
            
          


                <div className={transicao ? Style.paginaFormulario2 : Style.paginaFormulario}  >
                    <div className={Style.divQuantidadeQestoes}><h1 className={Style.legendaQtdQts}>Questão {indicePerguntaAtual+1} de 20</h1></div>
                    
                        <div className={Style.margemForm}>
                            <div className={Style.divNomeTitulo}>
                                <h1><b>Pesquisa Manaus 2<FaSearch/>24</b></h1>
                            </div>
                            
                            <div className={Style.DivEstiloDescricao}>
                                <h4>Essa pesquisa tem o intuito de obter informações de cidadãos eleitores da cidade de Manaus</h4>
                            </div>
                            <div className={Style.divTituloDaEntrevista}>
                                {indicePerguntaAtual <= 7 &&
                                <>
                                 <div className={Style.divEtapa}><h5>1</h5></div> <h5> Perguntas relacionadas a dados do entrevistado</h5>
                                </>
                                   
                                }
                                 {indicePerguntaAtual > 7 &&
                                 <>
                                  <div className={Style.divEtapa}><h5>2</h5></div> <h5> Perguntas relacionadas as intenções do entrevistado</h5>
                                 </>
                                   
                                }
                               
                            </div>
                            <div className={Style.divDadosPessoais}>
                                <br/>

                                <h5>{perguntas[indicePerguntaAtual]}</h5> {/* Mostra a pergunta atual com base no índice */}
                              
                                
                               
                            {/* <FloatingLabel controlId="floatingInput" className={`mb-3 ${campoVazio ? Style.campo_vazio : ''}`} >
                            {indicePerguntaAtual !== 2 &&    
                                <Form.Control type="text" onChange={respostaQuestao} value={respostaAtual} required />
                            
                            }
                             {indicePerguntaAtual === 2 &&
                         
                               <Form.Select onChange={respostaQuestao} value={respostaAtual}>
                                   <option value="masculino">Masculino</option>
                                   <option value="feminino">Feminino</option>
                               </Form.Select>
                            }
                            </FloatingLabel> */}
                            

                            <FloatingLabel controlId="floatingInput" className={`mb-3 ${campoVazio ? Style.campo_vazio : ''}`} >
                            {indicePerguntaAtual !== 2 && indicePerguntaAtual !== 8 &&
                                <Form.Control type="text" onChange={respostaQuestao} value={respostaAtual} required />
                            
                            }
                             {indicePerguntaAtual === 2 &&
                         
                               <Form.Select onChange={respostaQuestao} value={respostaAtual}>
                                    <option >Sexo</option>
                                   <option value="masculino">Masculino</option>
                                   <option value="feminino">Feminino</option>
                               </Form.Select>
                            }

                    {indicePerguntaAtual === 8 &&
                         
                         <Form.Select onChange={respostaQuestao} value={respostaAtual}>
                              <option >Candidatos</option>
                             <option value="Arthur Neto">Arthur Neto</option>
                             <option value="Amom Mandel">Amom Mandel</option>
                             <option value="Capitão Alberto Neto">Capitão Alberto Neto</option>
                             <option value="Carol Braz">Carol Braz</option>
                             <option value="Coronel Menezes">Coronel Menezes</option>
                             <option value="David Almeida">David Almeida</option>
                             <option value="Ricardo Nicolau">Ricardo Nicolau</option>
                             <option value="Roberto Cidade">Roberto Cidade</option>
                             <option value="Ze Ricardo">Ze Ricardo</option>
                             <option value="Outros">Outros</option>
                             <option value="Ninguém/Nenhum/Branco/Nulo">Ninguém/Nenhum/Branco/Nulo</option>
                             <option value="Não sabe/Não respondeu">Não sabe/Não respondeu</option>
                             
                             
                         </Form.Select>


                      }



                            </FloatingLabel>

                         


                            </div>
                            {indicePerguntaAtual < perguntas.length-1 &&
                            <Button variant="success" className={Style.botaoProximo} onClick={adicionarElemento}>Próxima pergunta</Button>
                            }
                            {indicePerguntaAtual == perguntas.length-1 &&
                            <Button variant="success" className={Style.botaoProximo} onClick={adicionarElemento}>Finalizar</Button>
                            }
                            </div>
                        <div className={Style.divBotaoCancEnv}>
                            {/* {indicePerguntaAtual == perguntas.length-1 &&
                            <>
                                <Button variant="danger" className={Style.botaoEnviarCancelar} onClick={adicionarElemento}>Cancelar</Button>
                                <Button variant="primary" className={Style.botaoEnviarCancelar} onClick={adicionarElemento}>Enviar</Button>
                            </>
                            
                            } */}
                            
                        </div>
                       
                    
                </div>

            ))}


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Entrevista finalizada!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Deseja enviar respostas?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={enviarFormulario}>
            Sim
          </Button>
        </Modal.Footer>
</Modal>


<Modal show={showSucesso} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario Enviado com sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Faça outra entrevista</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button> */}
          <Button variant="primary" onClick={novoFormulario}>
            Começar
          </Button>
        </Modal.Footer>
</Modal>

{cpfInv &&
<div className={Style.divAlerta}>
<Alert key={'danger'} variant={'danger'} onClose={() => setCpfInv(false)} dismissible>
          Você inseriu um CPF inválido!
    </Alert>

</div>

}

{disco &&

<Alert key={'warning'} variant={'warning'} >
 Mostre ao intrevistado o disco com os nomes dos cadidatos!
    </Alert>



}


        </Layout>
         
        
    )
}