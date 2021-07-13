import Head from 'next/head'
import Image from 'next/image'
import PerfectScrollbar from 'react-perfect-scrollbar'
import styles from '../styles/Gallery.module.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { attributes, react as GalleryContent } from '../content/gallery.md'

export default function Home() {
  const { images, title } = attributes;

  return (
    <div className={styles.container}>
      <Head>
        <title>Virgil Roger | Auteur photographe</title>
        <meta name="description" content="Portfolio des photographies de Virgil Roger" />
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/nfs5ypt.css" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>{ title }</h1>
        </header>
        <PerfectScrollbar className={styles.gallery}>
        {
          images.map((image: { id: string; src: string; alt: string; }) => <div className={styles['photo']} key={image.id}><Image src={image.src} alt={image.alt} width={800} height={800} objectFit="contain" /></div>)
        }
        </PerfectScrollbar>
        <section className={styles.content}>
          <GalleryContent />
        </section>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
