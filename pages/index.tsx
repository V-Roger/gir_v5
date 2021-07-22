import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PerfectScrollbar from 'react-perfect-scrollbar'
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
        <div className={styles.logo} >
          <Image alt="Logo de Virgil Roger" src="/img/logo_vroger.svg" width={158} height={104} objectFit="contain" />
        </div>
        <nav className={styles.nav}>
          <ul className={styles['nav--fixed']}>
            <li>
              <Link href="/bio" as={`/bio`}>
                Bio
              </Link>            
            </li>
            <li>
              <a href="mailto:roger.virgil+contact@gmail.com" title="Contacter Virgil Roger par email">
                Contact
              </a>
            </li>
          </ul>
          <PerfectScrollbar>
            <ul className={styles['nav--scrollable']}>
              {
                galleries?.map((gallery: { slug: string; title: string;}) => <li key={gallery.slug}>
                  <Link href="/gallery/[id]" as={`/gallery/${gallery.slug}`}>
                    { gallery.title }
                  </Link>
                </li>)
              }
                          {
                galleries?.map((gallery: { slug: string; title: string;}) => <li key={gallery.slug}>
                  <Link href="/gallery/[id]" as={`/gallery/${gallery.slug}`}>
                    { gallery.title }
                  </Link>
                </li>)
              }
                                      {
                galleries?.map((gallery: { slug: string; title: string;}) => <li key={gallery.slug}>
                  <Link href="/gallery/[id]" as={`/gallery/${gallery.slug}`}>
                    { gallery.title }
                  </Link>
                </li>)
              }
                                                    {
                galleries?.map((gallery: { slug: string; title: string;}) => <li key={gallery.slug}>
                  <Link href="/gallery/[id]" as={`/gallery/${gallery.slug}`}>
                    { gallery.title }
                  </Link>
                </li>)
              }
            </ul>
          </PerfectScrollbar>
        </nav>
      </main>
    </div>
  )
}

const getGalleries = async (context: any) => {
  const keys = context.keys()
  const values = keys.map(context)

  return Promise.all(keys.map(async (key: string, index: number) => {
    let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
    const { attributes } = values[index]

    return {
      slug,
      title: attributes.title
    }
  }))
}

export const getServerSideProps = async ({ params }: { params: any }) => {
  const galleryPromises = ((context) => {
    return getGalleries(context);
  }) (require.context("../content/galleries", true, /\.md$/));

  return {
    props: { ...params, galleries: await galleryPromises },
  };
};