import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Main() {
  return (
    <>
    <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Encontre o erro  &rarr;</h2>
          <p>Existe um erro neste arquivo. Veja que este bloco aparece diferente na tela.</p>
          </a>



          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Crie um repositório &rarr;</h2>
            <p>Após concluir o trabalho suba o código no github do grupo</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Evite componentes demais &rarr;</h2>
            <p>Crie somente componentes essenciais.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Trabalho em grupo &rarr;</h2>
            <p>
              Ajude para que todos do grupo participe, envolva-se.
            </p>
          </a>
        </div>
    </>
  )
}
