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

export default function Header(){



    return(
        <>
            <Navbar expand="lg" className={Style.headerNavBar}>
      <Container fluid>
        <Navbar.Brand href="#" className={Style.headerIconeLogo}>Nome do usuario logado</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav> */}
          
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
                <Dropdown.Item href="#/action-3">Sair</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            </div>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}