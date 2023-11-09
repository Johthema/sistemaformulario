import Layout from '../../components/index';
// import { Text, Card, Inset, Strong } from '@radix-ui/themes';
import Style from './home.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Criar</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}  className={`${Style.card2} ${Style.cardPadrao}`}>
     
                <Card.Body>
                    <Card.Title>Formularios enviados</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Visualizar</Button>
                </Card.Body>
            </Card>
             
            </div>
           {/*--------------------- Bloco horizontal 2 ---------------------*/}
            <div className={Style.divBlocoHorizontal}>

            <Card style={{ width: '18rem' }}  className={`${Style.card3} ${Style.cardPadrao}`}>
     
     <Card.Body>
        <Card.Title>Modelos</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Visualizar</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}  className={`${Style.card4} ${Style.cardPadrao}`}>
     
     <Card.Body>
        <Card.Title>Contatos</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Visualizar</Button>
    </Card.Body>
    </Card>
        
            </div>

            </div>

            
        </Layout>
        
     
    )
}