import Layout from '../../../components/index'
import Style from './cadastro.module.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaChevronLeft } from "react-icons/fa";


export default function Cadastro(){
   
    const Voltar = () => {
        window.history.back();
      };


    return(

        <Layout>
            <div className={Style.divFundo}>
                <div className={Style.divVoltar}>
                    <h5 className={Style.botaoVoltar} onClick={Voltar}><FaChevronLeft/> Voltar</h5>
                
                

                <div className={Style.divCard}>
                {/* <FloatingLabel
                    controlId="floatingInput"
                    label="Nome"
                    className="mb-3">

                <Form.Control type="text" placeholder="Rubevaldo" />
                </FloatingLabel> */}

                <FloatingLabel label="Nome" className="mb-3">
                    <Form.Control type="text" placeholder="Ronildo" />
                </FloatingLabel>

                <FloatingLabel label="Sobrenome" className="mb-3">
                    <Form.Control type="text" placeholder="Versosa" />
                </FloatingLabel>

                <FloatingLabel label="Email">
                    <Form.Control type="email" placeholder="mail@email.com" />
                </FloatingLabel>
                <br/>

                <FloatingLabel label="Data nascimento" className="mb-3">
                    <Form.Control type="text" placeholder="Data nascimento" />
                </FloatingLabel>
              
                <Form.Select aria-label="Papel exercido" size="lg">
                    <option>Papel exercido</option>
                    <option value="1">Administrador</option>
                    <option value="2">Pesquisador</option>
                    <option value="3">Outro</option>
                </Form.Select>

                

<br/>

                <Button variant="primary">Salvar</Button>


             

                </div>
                </div>
            </div>
            
            

        </Layout>
        
    )
}