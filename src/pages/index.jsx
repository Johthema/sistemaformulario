
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Login from '../pages/login/index'

const inter = Inter({ subsets: ['latin'] })

export default function Homes() {
  return (
    <>
    
        <Theme>
          <Login/>
        </Theme>
   

    </>
  )
}
 