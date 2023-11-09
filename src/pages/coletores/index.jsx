import Layout from '../../components/index';
import Style from './coletores.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEdit,  FaFileExport, FaFileInvoice, FaUserPlus } from 'react-icons/fa';
import { FaFileCirclePlus, FaEnvelopesBulk, FaUsers, FaUsersGear } from "react-icons/fa6";
import { useRouter } from "next/router"

export default function Coletadores(){

    const router = useRouter();

    function Opcoes(item){
        if(item == 1){
            router.push('./coletores/cadastro')

        }
    }


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


        <Card style={{ width: '18rem' }} className={Style.CardPadrao} onClick={()=>Opcoes(1)}>
        <Card.Body>
            <Card.Title>Cadastrar Coletadores</Card.Title>
            <Card.Text>
           <FaUserPlus className={Style.iconeCard}/>
            </Card.Text>
            <Button variant="primary" onClick={()=>Opcoes(1)}>Cadastrar</Button>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className={Style.CardPadrao}>
        <Card.Body>
            <Card.Title>Gerenciar coletadores</Card.Title>
            <Card.Text>
          <FaUsersGear className={Style.iconeCard}/>
            </Card.Text>
            <Button variant="primary"  onClick={()=>Opcoes(2)}>Visualizar</Button>
        </Card.Body>
        </Card>
        </div>
        </Layout>
    )
}