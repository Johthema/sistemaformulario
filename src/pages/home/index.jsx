import Layout from '../../components/index';
// import { Text, Card, Inset, Strong } from '@radix-ui/themes';
import Style from './home.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEdit,  FaFileExport, FaFileInvoice } from 'react-icons/fa';
import { FaFileCirclePlus, FaEnvelopesBulk, FaUsers } from "react-icons/fa6";
import { useRouter } from "next/router"

export default function HomePage(){

    const router = useRouter();

    function Opcoes(item){
        if(item == 1){
            router.push('/formularios/cadastro')

        }
        if(item == 2){
            router.push('/formularios/lista')

        }
        if(item == 3){
            router.push('/modelos')

        }
        if(item == 4){
            router.push('/coletores')

        }
      }

    return(
      
        <Layout>
            <div className={Style.divBlocos}>
                  {/*--------------------- Bloco horizontal 1 ---------------------*/}
            <div className={Style.divBlocoHorizontal}>
            <Card style={{ width: '18rem' }} className={`${Style.card1} ${Style.cardPadrao}`}>
     
                <Card.Body>
                    <Card.Title>Formulário</Card.Title>
                    <Card.Text>
                        <FaFileCirclePlus className={Style.iconeCard}/>
                    </Card.Text>
                    <Button variant="primary" onClick={()=>Opcoes(1)}>Criar</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}  className={`${Style.card2} ${Style.cardPadrao}`}>
     
                <Card.Body>
                    <Card.Title className={Style.tituloCard}>Enviados</Card.Title>
                    <Card.Text>
                   <FaFileExport className={Style.iconeCard} />
                    </Card.Text>
                    <Button variant="primary" onClick={()=>Opcoes(2)}>Visualizar</Button>
                </Card.Body>
            </Card>
             
            </div>
           {/*--------------------- Bloco horizontal 2 ---------------------*/}
            <div className={Style.divBlocoHorizontal}>

            <Card style={{ width: '18rem' }}  className={`${Style.card3} ${Style.cardPadrao}`}>
     
     <Card.Body>
        <Card.Title className={Style.tituloCard}>Modelos</Card.Title>
        <Card.Text>
      <FaFileInvoice className={Style.iconeCard}/>
        </Card.Text>
        <Button variant="primary" onClick={()=>Opcoes(3)}>Visualizar</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}  className={`${Style.card4} ${Style.cardPadrao}`}>
     
     <Card.Body>
        <Card.Title className={Style.tituloCard}>Pesquisador/Entrevistados</Card.Title>
        <Card.Text>
      <FaUsers className={Style.iconeCard}/>
        </Card.Text>
        <Button variant="primary" onClick={()=>Opcoes(4)}>Gerir</Button>
    </Card.Body>
    </Card>
        
            </div>

            </div>

            
        </Layout>
        
     
    )
}