import Layout from '../../components/index';
import Style from './coletores.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEdit,  FaFileExport, FaFileInvoice, FaUserPlus } from 'react-icons/fa';
import { FaFileCirclePlus, FaEnvelopesBulk, FaUsers, FaUsersGear } from "react-icons/fa6";
import { useRouter } from "next/router"

export default function Coletores(){
    return(
        <Layout>
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


        <Card style={{ width: '18rem' }} className={Style.CardPadrao}>
        <Card.Body>
            <Card.Title>Coletadores</Card.Title>
            <Card.Text>
           <FaUserPlus className={Style.iconeCard}/>
            </Card.Text>
            <Button variant="primary">Cadastrar</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className={Style.CardPadrao}>
        <Card.Body>
            <Card.Title>Lista de coletadores</Card.Title>
            <Card.Text>
          <FaUsersGear className={Style.iconeCard}/>
            </Card.Text>
            <Button variant="primary">Visualizar</Button>
        </Card.Body>
        </Card>
        </div>
        </Layout>
    )
}