import Layout from '../../components/index';
// import { Text, Card, Inset, Strong } from '@radix-ui/themes';
import Style from './home.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEdit,  FaFileExport, FaFileInvoice } from 'react-icons/fa';
import { FaFileCirclePlus, FaEnvelopesBulk, FaUsers } from "react-icons/fa6";

export default function HomePage(){
    return(
      
        <Layout>
            <div className={Style.divBlocos}>
                  {/*--------------------- Bloco horizontal 1 ---------------------*/}
            <div className={Style.divBlocoHorizontal}>
            <Card style={{ width: '18rem' }} className={`${Style.card1} ${Style.cardPadrao}`}>
     
                <Card.Body>
                    <Card.Title>Criar formulario</Card.Title>
                    <Card.Text>
                        <FaFileCirclePlus className={Style.iconeCard}/>
                    </Card.Text>
                    <Button variant="primary">Criar</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}  className={`${Style.card2} ${Style.cardPadrao}`}>
     
                <Card.Body>
                    <Card.Title className={Style.tituloCard}>Formularios enviados</Card.Title>
                    <Card.Text>
                   <FaFileExport className={Style.iconeCard} />
                    </Card.Text>
                    <Button variant="primary">Visualizar</Button>
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
        <Button variant="primary">Visualizar</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}  className={`${Style.card4} ${Style.cardPadrao}`}>
     
     <Card.Body>
        <Card.Title className={Style.tituloCard}>Coletadores</Card.Title>
        <Card.Text>
      <FaUsers className={Style.iconeCard}/>
        </Card.Text>
        <Button variant="primary">Visualizar</Button>
    </Card.Body>
    </Card>
        
            </div>

            </div>

            
        </Layout>
        
     
    )
}