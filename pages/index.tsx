import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { promises as fs } from 'fs'
import path from 'path'
import styles from '../styles/Home.module.scss'

export default function Home({ galleries }: { galleries: { slug: string, title: string;}[] }) {
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
            {
              galleries?.map((gallery: { slug: string; title: string;}) => <li key={gallery.slug}>
                <Link href="/gallery/[id]" as={`/gallery/${gallery.slug}`}>
                  { gallery.title }
                </Link>
              </li>)
            }
          </ul>
        </nav>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const filenames = await fs.readdir('content/galleries')

  const galleries = filenames.map(async (filename) => {
    const { attributes } = await import(`../content/galleries/${filename}`)

    return {
      slug: filename.replace(/^.*[\\\/]/, '').slice(0, -3),
      title: attributes.title
    }
  })

  return {
    props: {
      galleries: await Promise.all(galleries),
    },
  }
}