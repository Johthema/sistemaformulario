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
            <Card style={{ width: '18rem' }} className={Style.card1}>
     
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className={Style.card2}>
     
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
             
            </div>
           {/*--------------------- Bloco horizontal 2 ---------------------*/}
            <div className={Style.divBlocoHorizontal}>

            <Card style={{ width: '18rem' }} className={Style.card3}>
     
     <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className={Style.card4}>
     
     <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
        
            </div>

            </div>

            
        </Layout>
        
     
    )
}