import { FC } from 'react'
import Head from 'next/head'
import solarizedlight from 'react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight'
import { FaComments } from 'react-icons/fa'
import { promisify } from 'util'
import { GetStaticProps } from 'next'

import Container from '../components/Container'
import Header from '../components/Header'
import Main from '../components/Main'
import ContainedButton from '../components/ContainedButton'
import OutlinedButton from '../components/OutlinedButton'
import Feature from '../components/Feature'
import styles from './index.module.scss'
import Page from './_page'

type IHome = FC<{ sampleCode: string }>

const About: IHome = ({ sampleCode }) => (
  <>
    <Head>
      <title>Vala Programming Language</title>
      <meta name="theme-color" content="#fff" />
    </Head>
    <Container className={styles.grid}>
      <Page>
        <Main className={styles.main}>
          <Main.Title>Community</Main.Title>
          <Main.Description>
            Vala has a friendly and vibrant community,
            that let you just welcome. You have a question about the
            language, the tools and the compiler or the libraries? Just ask!
            Or have a talk with other Vala coders and developers.
          </Main.Description>
          <Feature className={styles.feature} icon={FaComments}>
            There is always someone in the Vala community chatroom,
            who can give you an answer to your questions.
          </Feature>
          <Main.ActionArea>
            <ContainedButton href="https://matrix.to/#/#_gimpnet_#vala:gnome.org" className={styles.button}>
              JOIN VALA ROOM
            </ContainedButton>
          </Main.ActionArea>
        </Main>
      </Page>
    </Container>
  </>
)

export default About
