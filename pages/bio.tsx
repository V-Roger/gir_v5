import Head from "next/head"
import { Component } from 'react'
import Image from 'next/image'
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
                objectFit="contain" />
          </section>
          <div className={styles.content}>
            <ReactMarkdown>
              { bioContent }
            </ReactMarkdown>
          </div>
        </main>
      </>
    )
  }
}