import React, { ReactElement } from 'react'
import { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'

type IMyApp = { (props: AppProps): ReactElement }

const MyApp: IMyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default MyApp
