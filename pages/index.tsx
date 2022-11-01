import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'

import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto React - Trabalho em Grupo</title>
        <meta name="description" content="Objetivo é desmembrar este arquivo em vários componentes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <Header />

        <Main />

      </main>

    <Footer />

    </div>
  )
}

export default Home
