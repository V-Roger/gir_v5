import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Gallery.module.scss'
import { attributes, react as GalleryContent } from '../content/gallery.md';

export default function Home() {
  const { images } = attributes;

  return (
    <div className={styles.container}>
      <Head>
        <title>Virgil Roger | Auteur photographe</title>
        <meta name="description" content="Portfolio des photographies de Virgil Roger" />
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/nfs5ypt.css" />
      </Head>

      <main className={styles.main}>
        {
          images.map((image: { id: string; src: string; alt: string; }) => <Image className={styles['grid-item']} key={image.id} src={image.src} alt={image.alt} width={800} height={800} objectFit="contain" />)
        }
        <GalleryContent className={styles.content}/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
