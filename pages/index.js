import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Nekomatta</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main className={styles.main}>
        <div className={styles.background}></div>
        <h1 className={styles.text}>UNDER CONSTRUCTION</h1>
        <div className={styles.center}>
          <img className={styles.image} src="/index.jpg"></img>
        </div>
      </main>
    </div>
  )
}