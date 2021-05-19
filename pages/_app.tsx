import { ReactElement } from 'react'
import { AppProps } from 'next/app'

import '../styles/globals.scss'

type IMyApp = { (props: AppProps): ReactElement }

const MyApp: IMyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default MyApp
