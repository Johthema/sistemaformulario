import Layout from '../../../components/index';
import Style from './formulario.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Formulario(){

    const now = 60;

    return (
        <Layout>
            <br/>
            <ProgressBar now={now} label={`${now}%`} />
            <div className={Style.paginaFormulario}>
                <div className={Style.divQuantidadeQestoes}><h1 className={Style.legendaQtdQts}>Questão 1 de 20</h1></div>
                
                    <div className={Style.margemForm}>
                        <div className={Style.divNomeTitulo}>
                            <h1><b>Pesquisa Manaus 2024</b></h1>
                        </div>
                        
                        <div className={Style.DivEstiloDescricao}>
                            <h4>Essa pesquisa tem o intuito de obter informações de cidadãos eleitores dos bairros da cidade de Manaus</h4>
                        </div>
                        <div className={Style.divDadosPessoais}>
                            <br/>
                            <h5>Qual seu nome?</h5>
                        <FloatingLabel controlId="floatingInput" label="Nome completo" className="mb-3">
                            <Form.Control type="text" placeholder="Nome completo" />
                        </FloatingLabel>
                        
                        </div>
                        <Button variant="success" className={Style.botaoProximo}>Próxima pergunta</Button>
                    </div>
                  
            </div>

             

        </Layout>
         
        
    )
}