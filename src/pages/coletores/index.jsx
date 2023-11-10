import Layout from '../../components/index';
import Style from './pesquisadores.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEdit,  FaFileExport, FaFileInvoice, FaUserPlus, FaUsersCog } from 'react-icons/fa';
import { FaFileCirclePlus, FaEnvelopesBulk, FaUsers, FaUsersGear, FaUsersLine } from "react-icons/fa6";
import { useRouter } from "next/router"

export default function Pesquisadores(){

    const router = useRouter();

    function Opcoes(item){
        if(item == 1){
            router.push('./coletores/cadastro')

        }
    }


    return(
        <Layout>
            
            <div className={Style.divFundoColetadores}>
                <div className={Style.divLateral}>
                    <div className={Style.divPercentual}>
                        <h4>Dados coletados</h4>
                        <div className={Style.percentual}>
                            <h2>50%</h2>
                            <h5 className={Style.legendaPercentual}>5/10</h5>
                        </div>
                    </div>
                    <div>
                        <div className={Style.divDados}>
                        <h5 className={Style.fontDados}>Total de pesquisadores <span className={Style.dadosLegenda}>2</span></h5>
                        <h5 className={Style.fontDados}>Total de entrevistados <span className={Style.dadosLegenda}>5</span></h5>
                        <h5 className={Style.fontDados}>Total de entrevistas pendentes <span className={Style.dadosLegenda}>5</span></h5>
                        </div>
                    </div>

                </div>

          
        <div className={Style.divCards}>
        {/* <Card style={{ width: '18rem' }} className={Style.CardPadrao}>
        <Card.Body>
            <Card.Title>Administrador</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card> */}


        <Card style={{ width: '18rem' }} className={Style.CardPadrao} onClick={()=>Opcoes(1)}>
        <Card.Body>
            <Card.Title>Cadastrar Pesquisador</Card.Title>
            <Card.Text>
           <FaUserPlus className={Style.iconeCard}/>
            </Card.Text>
            <Button variant="primary" onClick={()=>Opcoes(1)}>Cadastrar</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className={Style.CardPadrao}>
        <Card.Body>
            <Card.Title>Gerenciar pesquisadores</Card.Title>
            <Card.Text>
          <FaUsersCog className={Style.iconeCard}/>
            </Card.Text>
            <Button variant="primary"  onClick={()=>Opcoes(2)}>Visualizar</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className={Style.CardPadrao}>
        <Card.Body>
            <Card.Title>Gerenciar entrevistados</Card.Title>
            <Card.Text>
          <FaUsersLine className={Style.iconeCard}/>
            </Card.Text>
            <Button variant="primary"  onClick={()=>Opcoes(2)}>Visualizar</Button>
        </Card.Body>
        </Card>
        </div>
        </div>
        </Layout>
    )
}