import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ITBrains.pk</title>
        <meta name="description" content="Reeal estate investment compnay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">ITBrains.pk</a>
        </h1>

        <p className={styles.description}>
          First IT Companies Business Portal in Pakistan
        
        
        </p>
<p>  <code className={styles.code}>Launching Soon!</code></p>
        </main>

      <footer className={styles.footer}>
        <a
          href="https://reactivespace.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed with Love at Reactivespace.com
          
        </a>
      </footer>
    </div>
  )
}
