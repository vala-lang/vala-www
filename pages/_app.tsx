import { ReactElement } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.scss'

type IMyApp = { (props: AppProps): ReactElement }

const MyApp: IMyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
