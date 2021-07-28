import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import PerfectScrollbar from 'react-perfect-scrollbar'
import ReactMarkdown from 'react-markdown'
import styles from '../../styles/Gallery.module.scss'
import arrows from '../../public/img/arrows-left.svg'

export default function Gallery({ attributes, photos, content }: { photos: Array<{src: string; alt: string; blurDataURL: string}>, attributes: Record<string, any>, content: string}) {
  const { title, exhibitions } = attributes;

  return (
    <div className={styles.container}>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="Portfolio des photographies de Virgil Roger" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta property="og:title"              content="Virgil Roger | Auteur photographe" />
        <meta property="fb:app_id"              content="222874507778428" />
        <meta property="og:description"        content={title} />
        <meta property="og:image"              content={`${process.env.URL || ''}/${photos[0].src}`} />
        <meta name="apple-mobile-web-app-title" content="Virgil Roger | Auteur photographe" />
        <meta name="application-name" content="Virgil Roger | Auteur photographe" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="https://use.typekit.net/nfs5ypt.css" />
      </Head>
      <nav className={styles.nav}>
        <Link href="/" as={`/`} passHref>
          <Image src={arrows} alt="Back home" />
        </Link>
      </nav>
      
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
          photos?.map((image: { src: string; alt: string; blurDataURL: string }, index: number) => <div className={styles['photo']} key={image.src}>
            <Image
              src={`/${image.src}`}
              alt={`${image.src}`} 
              priority={index < 3}
              width={1200} 
              height={900} 
              quality={100} 
              placeholder="blur"
              blurDataURL="data:image/png;base64,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"
              objectFit="contain" />
          </div>)
        }
        </PerfectScrollbar>
        <PerfectScrollbar className={styles.content}>
          <ReactMarkdown>
            { content }
            </ReactMarkdown>
        </PerfectScrollbar>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { gallery } = ctx.params
  const { attributes, body } = await import(`../../content/galleries/${gallery}.md`)

  return {
    props: {
      attributes: attributes,
      content: body,
      photos: attributes.images,
    },
  }
}

export async function getStaticPaths() {
  const gallerySlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key: string, index: number) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
  })(require.context('../../content/galleries', true, /\.md$/))

  const paths = gallerySlugs.map((slug: string) => `/gallery/${slug}`)

  return {
    paths,
    fallback: false,
  }
}