
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Login from '../pages/login/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export default function Homes() {
  return (
    <>
    
        <Theme className={styles.divFundoLogin}>
          <Login/>
        </Theme>
   

    </>
  )
}
 