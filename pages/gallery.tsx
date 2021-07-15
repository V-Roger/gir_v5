import Head from 'next/head'
import Image from 'next/image'
import PerfectScrollbar from 'react-perfect-scrollbar'
import styles from '../styles/Gallery.module.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { attributes, react as GalleryContent } from '../content/galleries/oneroll.md'

export default function Home() {
  const { images, title, exhibitions } = attributes;

  return (
    <div className={styles.container}>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Portfolio des photographies de Virgil Roger" />
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/nfs5ypt.css" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles['header-title']}>{ title }</h1>
          { exhibitions && exhibitions.length &&
          <section className={styles.exhibitions}>
            <h2>
              Expositions
            </h2>
            <ul>
              {
                  exhibitions.map((exhibition: { place: string, label: string, date: string }) => <li className={styles.exhibition} key={exhibition.label}>
                    <p>
                      { exhibition.label }
                    </p>
                    <p>
                      { exhibition.place }
                    </p>
                    <p>
                      { exhibition.date }
                    </p>
                  </li>)
              }
            </ul>
          </section>
          }
        </header>
        <PerfectScrollbar className={styles.gallery}>
        {
          images.map((image: { id: string; src: string; alt: string; }) => <div className={styles['photo']} key={image.id}><Image src={image.src} alt={image.alt} width={800} height={800} objectFit="contain" /></div>)
        }
        </PerfectScrollbar>
        <PerfectScrollbar className={styles.content}>
          <GalleryContent />
        </PerfectScrollbar>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
