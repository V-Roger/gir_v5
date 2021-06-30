import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Virgil Roger | Auteur photographe</title>
        <meta name="description" content="Portfolio des photographies de Virgil Roger" />
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/nfs5ypt.css" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <ul className={styles['nav--fixed']}>
            <li>
              <Image className={styles.logo} alt="Logo de Virgil Roger" src="/img/logo_vroger.svg" width={150} height={100} objectFit="contain" />
            </li>
            <li>
              <a>
                Accueil
              </a>
            </li>
            <li>
              <a>
                Contact
              </a>
            </li>
            <li>
              <a>
                Bio
              </a>
            </li>
          </ul>
          <ul className={styles['nav--scrollable']}>
            <li>
              <a>
                Collages
              </a>
            </li>
            <li>
              <a>
                Victoria
              </a>
            </li>
            <li>
              <a>
                Napoli
              </a>
            </li>
            <li>
              <a>
                Please Look Up
              </a>
            </li>
            <li>
              <a>
                Medium
              </a>
            </li>
            <li>
              <a>
                One Roll #2
              </a>
            </li>
            <li>
              <a>
                Collages
              </a>
            </li>
            <li>
              <a>
                Victoria
              </a>
            </li>
            <li>
              <a>
                Napoli
              </a>
            </li>
            <li>
              <a>
                Please Look Up
              </a>
            </li>
            <li>
              <a>
                Medium
              </a>
            </li>
            <li>
              <a>
                One Roll #2
              </a>
            </li>
          </ul>
        </nav>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
