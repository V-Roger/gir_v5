import Head from "next/head"
import { Component } from 'react'
import Image from 'next/image'
import PerfectScrollbar from 'react-perfect-scrollbar'
import ReactMarkdown from "react-markdown";
import { attributes, body as bioContent } from '../content/bio.md';
import styles from '../styles/Bio.module.scss'

export default class Bio extends Component {
  render() {
    let { title, portrait, exhibitions, publications } = attributes;
    return (
      <>
        <Head>
          <title>Virgil Roger | Auteur photographe</title>
          <meta name="description" content="Portfolio des photographies de Virgil Roger" />
          <link rel="icon" href="/img/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/nfs5ypt.css" />
        </Head>
        <main className={styles.columns}>
          <h1 className={styles.title}>{title}</h1>
          <section className={styles.bio}>
              <h3>Je suis</h3>
              <Image
                src={`/${portrait}`}
                alt="Virgil Roger" 
                width={1200} 
                height={800} 
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,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"
                objectFit="contain" />
          </section>
          <PerfectScrollbar className={styles.content}>
            <ReactMarkdown>
              { bioContent }
            </ReactMarkdown>
            <div className={styles.exhibitions}>
              <h3>J&apos;ai exposé</h3>
              <ul>
                {
                  exhibitions?.map((exhibition: { place: string; date: string; label: string; }) =>
                  <li key={`${exhibition.place}-${exhibition.date}`}>
                    <b>{ exhibition.date }</b>
                    <p>{ exhibition.label } <i>{ exhibition.place }</i></p>
                  </li>
                  )
                }
              </ul>
            </div>
            <div className={styles.publications}>
              <h3>J&apos;ai publié</h3>
              <ul>
                {
                  publications?.map((publication: { medium: string; date: string; }) =>
                  <li key={`${publication.medium}-${publication.date}`}>
                    <b>{ publication.date }</b>
                    <p>{ publication.medium }</p>
                  </li>
                  )
                }
              </ul>
            </div>
          </PerfectScrollbar>
        </main>
      </>
    )
  }
}