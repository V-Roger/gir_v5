import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PerfectScrollbar from 'react-perfect-scrollbar'
import styles from '../styles/Home.module.scss'
import logo from '../public/img/logo_vroger.svg'

export default function Home({ galleries }: { galleries: { slug: string, title: string;}[] }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Virgil Roger | Auteur photographe</title>
        <meta name="description" content="Portfolio des photographies de Virgil Roger" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta property="og:title"              content="Virgil Roger | Auteur photographe" />
        <meta property="fb:app_id"             content="222874507778428" />
        <meta property="og:description"        content="Portfolio des photographies de Virgil Roger" />
        <meta property="og:image"              content={`${process.env.URL || ''}/img/logo_vroger.svg`} />
        <meta property="og:image:width"        content="2160" />
        <meta property="og:image:height"       content="1440" />
        <meta name="apple-mobile-web-app-title" content="Virgil Roger | Auteur photographe" />
        <meta name="application-name" content="Virgil Roger | Auteur photographe" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="https://use.typekit.net/nfs5ypt.css" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo} >
          <Image alt="Logo de Virgil Roger" src={logo} priority={true} width={158} height={104} objectFit="contain" />
        </div>
        <nav className={styles.nav}>
          <ul className={styles['nav--fixed']}>
            <li>
              <Link href="/bio" as={`/bio`}>
                Bio
              </Link>            
            </li>
            <li>
              <a href="https://www.patreon.com/virgil_roger" title="Soutenir Virgil Roger sur Patreon" rel="noreferrer" target="_blank">
                Patreon
              </a>
            </li>
            <li>
              <a href="https://shop.virgil-roger.photography" title="Acheter des oeuvres de Virgil Roger" rel="noreferrer" target="_blank">
                Boutique
              </a>
            </li>
            <li>
              <a href="https://15negatives.com" title="15 Negatives : Darkroom Prints direct from the photographer" rel="noreferrer" target="_blank">
                15Negatives
              </a>            
            </li>
            <li>
              <a href="https://wepush.photo" title="Collectif PUSH" rel="noreferrer" target="_blank">
                Collectif PUSH
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
    props: { 
      ...params, 
      galleries: await galleryPromises,
    },
  };
};