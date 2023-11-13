import Layout from '../../../components/index';
import Style from './cadastro.module.css';
import Form from 'react-bootstrap/Form';
import {useState, useEffect, useRef} from 'react';
import { useRouter } from "next/router";


export default function CreateForm(){

    const router = useRouter();
    const [transicao, setTransicao] = useState(false)
    const inputRef = useRef(null);
  
  
    useEffect(() => {
      // Ativa a animação após o componente ser montado no cliente
      setTransicao(true);
      inputRef.current.focus();
    }, []);




    return(
        <Layout>
            <div className={Style.divFundo}>

                <div className={Style.divTituloForm} >
                    <h5 className={transicao ? Style.nomeFormulario : Style.nomeFormulario2  }>Você precisa de um títuto para seu formuário</h5>
                    <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" ref={inputRef}/>
                </div>


            </div>
        </Layout>

        
        
    )
}