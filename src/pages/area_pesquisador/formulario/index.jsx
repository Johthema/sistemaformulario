import Layout from '../../../components/index';
import Style from './formulario.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


export default function Formulario(){
    const [lista, setLista] = useState(['']);
    const [perguntas, setPerguntas] = useState(['Qual seu nome?','Qual seu CPF?']);
    const [indicePerguntaAtual, setIndicePerguntaAtual] = useState(0); // Estado para controlar o índice da pergunta atual
    const [isFlipped, setIsFlipped] = useState(false);
    const now = 60;

    const handleClick = () => {
        setIsFlipped(!isFlipped);
      };

    const adicionarElemento = () => {

        // Verificar se ainda há perguntas não respondidas
        if (indicePerguntaAtual < perguntas.length - 1) {
            setIndicePerguntaAtual(indicePerguntaAtual + 1); // Atualizar o índice da próxima pergunta
        } else {
            // Aqui você pode decidir o que fazer quando todas as perguntas forem respondidas
            console.log('Todas as perguntas foram respondidas.');
        }


        // const novoElemento = 'novo item'; // Novo elemento a ser adicionado
    
        // // Criar uma nova lista com o novo elemento adicionado ao final
        // const novaLista = [...lista, novoElemento];
    
        // // Atualizar o estado com a nova lista
        // setLista(novaLista);
      };

    return (
        <Layout>
            <br/>
            <ProgressBar now={now} label={`${now}%`} />

            {lista.map((item, index) => (
            
          


                <div className={Style.paginaFormulario} >
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
                              
                                
                                
                            <FloatingLabel controlId="floatingInput" label="Nome completo" className="mb-3">
                                <Form.Control type="text" placeholder="Nome completo" />
                            </FloatingLabel>
                            
                            </div>
                            <Button variant="success" className={Style.botaoProximo} onClick={adicionarElemento}>Próxima pergunta</Button>
                        </div>
                    
                </div>

            ))}

        </Layout>
         
        
    )
}