import Layout from '../../../components/index';
import Style from './formulario.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';


export default function Formulario(){
    const [lista, setLista] = useState(['']);
    const [perguntas, setPerguntas] = useState([
        'Qual seu nome?',
        'Qual seu CPF?',
        'Qual seu sexo?',
        'Qual seu telefone celular? 92 9 XXXX-XXXX',
        'Qual seu Instagram',
        'Qual seu Facebook',
        'Qual seu Bairro?',
        
    ]);
    const [indicePerguntaAtual, setIndicePerguntaAtual] = useState(0); // Estado para controlar o índice da pergunta atual
    const [isFlipped, setIsFlipped] = useState(false);
    const [now, setNow] = useState(0) ;
    const [transicao, setTransicao] = useState(false);
    //Varivaeis dados de usuario
    const [nomeEntrevistado, setNomeEntrevistado] = useState('');
    const [cpfEntrevistado, setCpfEntrevistado] = useState('');
    const [sexo, setSexo] = useState('');
    const [telefoneEntrevistado, setTelefoneEntrevistado] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [bairro, setBairro] = useState('');


    const [respostaAtual, setRespostaAtual] = useState(''); // Estado para controlar a resposta atual

    const adicionarElemento = () => {

        // Verificar se ainda há perguntas não respondidas
        if (indicePerguntaAtual < perguntas.length - 1) {
            setIndicePerguntaAtual(indicePerguntaAtual + 1); // Atualizar o índice da próxima pergunta
           
            setTransicao(!transicao)

            const cont = 10 + now
            setNow(cont);

           

        } else {
            // Aqui você pode decidir o que fazer quando todas as perguntas forem respondidas
            console.log('Todas as perguntas foram respondidas.');
        }
       


        setRespostaAtual('');
      };

      const respostaQuestao=(evt) =>{
        if(indicePerguntaAtual == 0){
            setNomeEntrevistado(evt.target.value);
            setRespostaAtual(evt.target.value);
        } else if(indicePerguntaAtual == 1){
            setCpfEntrevistado(evt.target.value);
            setRespostaAtual(evt.target.value);
        } else if(indicePerguntaAtual == 2){
            setSexo(evt.target.value);
            setRespostaAtual(evt.target.value);
        } else if(indicePerguntaAtual == 3){
            setTelefoneEntrevistado(evt.target.value);
            setRespostaAtual(evt.target.value);
        } else if(indicePerguntaAtual == 4){
            setInstagram(evt.target.value);
            setRespostaAtual(evt.target.value);
        }else if(indicePerguntaAtual == 5){
            setFacebook(evt.target.value);
            setRespostaAtual(evt.target.value);
        }else if(indicePerguntaAtual == 6){
            setBairro(evt.target.value);
            setRespostaAtual(evt.target.value);
        }
      }

      console.log("nome do entrevistado: ", nomeEntrevistado)
      console.log("cpf do entrevistado: ", cpfEntrevistado)
      console.log("telefone do entrevistado: ", telefoneEntrevistado)
      console.log("sexo do entrevistado: ", sexo)
      console.log("instagram do entrevistado: ", instagram)
      console.log("facebook do entrevistado: ",facebook)
      console.log("bairro do entrevistado: ",bairro)

    return (
        <Layout>
            <br/>
            <ProgressBar now={now} label={`${now}%`} />

            {lista.map((item, index) => (
            
          


                <div className={transicao ? Style.paginaFormulario2 : Style.paginaFormulario}  >
                    <div className={Style.divQuantidadeQestoes}><h1 className={Style.legendaQtdQts}>Questão {indicePerguntaAtual+1} de 20</h1></div>
                    
                        <div className={Style.margemForm}>
                            <div className={Style.divNomeTitulo}>
                                <h1><b>Pesquisa Manaus 2024</b></h1>
                            </div>
                            
                            <div className={Style.DivEstiloDescricao}>
                                <h4>Essa pesquisa tem o intuito de obter informações de cidadãos eleitores dos bairros da cidade de Manaus</h4>
                            </div>
                            <div className={Style.divDadosPessoais}>
                                <br/>

                                <h5>{perguntas[indicePerguntaAtual]}</h5> {/* Mostra a pergunta atual com base no índice */}
                              
                                
                                
                            <FloatingLabel controlId="floatingInput" className="mb-3">
                                <Form.Control type="text" onChange={respostaQuestao} value={respostaAtual} />
                            </FloatingLabel>
                            
                            </div>
                            <Button variant="success" className={Style.botaoProximo} onClick={adicionarElemento}>Próxima pergunta</Button>
                        </div>
                    
                </div>

            ))}

        </Layout>
         
        
    )
}