//Imports para a biblioteca react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../styles/globals.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Style from './header.module.css';
import { FaEnvelope } from "react-icons/fa6";
import Dropdown from 'react-bootstrap/Dropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useRouter } from "next/router";
import Image from 'next/image';
import Logo from '../../assets/logo_pequena.png';


export default function Header(){
  const router = useRouter();
  function Opcoes(item){
    
  }

  function Home(){
    
    router.push('/home')
   
    
  } 


    return(
        <>
            <Navbar expand="lg" className={Style.headerNavBar}>
      <Container fluid>
        {/* <Navbar.Brand className={Style.headerIconeLogo}>Nome do usuario logado</Navbar.Brand> */}
        <h5 className={Style.headerIconeLogo}>Nome do usuario logado</h5>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-center flex-grow-1 pe-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
          <Image src={Logo} className={Style.imgLogo} onClick={Home} alt="" />
          </Nav>
          
           <div className={Style.divIconesMenu}>
    <FaEnvelope className={Style.iconeNotificacao} Tootlip="Notificações"/>
            
            
            {/* <Button variant="outline-success">Menu</Button> */}

            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className={Style.botaoMenu}>
                Menu
            </Dropdown.Toggle>

            <Dropdown.Menu className={Style.menuDrop} >
                <Dropdown.Item href="#/action-1">Perfil</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Configurações</Dropdown.Item>
                <Dropdown.Item href="/">Sair</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            </div>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}