import Head from "next/head"
import { Component } from 'react'
import ReactMarkdown from "react-markdown";
import { attributes, body as bioContent } from '../content/bio.md';

export default class Bio extends Component {
  render() {
    let { title } = attributes;
    return (
      <>
        <Head>
          <title>Virgil Roger | Auteur photographe</title>
          <meta name="description" content="Portfolio des photographies de Virgil Roger" />
          <link rel="icon" href="/img/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/nfs5ypt.css" />
        </Head>
        <article>
          <h1>{title}</h1>
          <ReactMarkdown>
            { bioContent }
          </ReactMarkdown>
        </article>
      </>
    )
  }
}