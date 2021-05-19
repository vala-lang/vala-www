import { FC } from 'react'
import Head from 'next/head'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import vala from 'react-syntax-highlighter/dist/cjs/languages/prism/vala'
import solarizedlight from 'react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight'
import { FaCogs, FaCube, FaRocket } from 'react-icons/fa'
import { promisify } from 'util'
import { readFile as _readFile } from 'fs'
import { GetStaticProps } from 'next'

import Container from '../components/Container'
import Header from '../components/Header'
import Main from '../components/Main'
import ContainedButton from '../components/ContainedButton'
import OutlinedButton from '../components/OutlinedButton'
import Feature from '../components/Feature'
import styles from './index.module.css'

type IHome = FC<{ sampleCode: string }>

SyntaxHighlighter.registerLanguage('vala', vala)

const Home: IHome = ({ sampleCode }) => (
  <>
    <Head>
      <title>Vala Programming Language</title>
      <meta name="theme-color" content="#fff" />
    </Head>
    <Container className={styles.grid}>
      <Header className={styles.header}>
        <Header.NavLink href="/about">About</Header.NavLink>
        <Header.NavLink href="/learn">Learn</Header.NavLink>
        <Header.NavLink href="/community">Community</Header.NavLink>
        <Header.NavLink href="https://valadoc.org" external>
          API Reference
        </Header.NavLink>
        <Header.NavLink href="https://gitlab.gnome.org/GNOME/vala" external>
          Source Code
        </Header.NavLink>
        <Header.NavLink href="https://planet.vala-project.org" external>
          News
        </Header.NavLink>
      </Header>
      <Main className={styles.main}>
        <Main.Title>A Modern, Fast, Open Source Language</Main.Title>
        <Main.Description>
          Be able to write modern, high-level code, with fully native
          performance, without requiring any additional runtime and maintaining
          full API/ABI compatibility with your C applications and libraries.
        </Main.Description>
        <Main.ActionArea>
          <ContainedButton href="#" className={styles.button}>
            GET STARTED
          </ContainedButton>
          <OutlinedButton href="#" className={styles.button}>
            WHY VALA?
          </OutlinedButton>
        </Main.ActionArea>
      </Main>
      <SyntaxHighlighter
        language="vala"
        className={styles.sampleCode}
        style={solarizedlight}
        showLineNumbers
      >
        {sampleCode}
      </SyntaxHighlighter>
      <Feature className={styles.feature} icon={FaCube}>
        Familiar to anyone who has worked with Java or C#, but maintaining
        API/ABI compatibility with C.
      </Feature>
      <Feature className={styles.feature} icon={FaRocket}>
        Low memory requirements, fully native execution, and created targeting
        the GLib object system.
      </Feature>
      <Feature className={styles.feature} icon={FaCogs}>
        Signals, properties, generics, lambdas, assisted memory management,
        exception handling, type inference, asynchronous programming, and more.
      </Feature>
    </Container>
  </>
)

const readFile = promisify(_readFile)

const getStaticProps: GetStaticProps = async () => ({
  props: {
    sampleCode: (
      await readFile(
        __dirname +
          '/../../../pages/sample.vala' /* XXX: There must be a better way to do this */,
        {
          encoding: 'utf-8',
        }
      )
    ).trim(),
  },
})

export default Home
export { getStaticProps }
