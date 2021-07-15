import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Head>
          { 
            //eslint-disable-next-line @next/next/no-sync-scripts
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          }
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
        </article>
      </>
    )
  }
}