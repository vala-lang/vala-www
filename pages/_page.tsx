import { FC } from 'react'
import { ReactElement } from 'react'
import { AppProps } from 'next/app'
import Header from '../components/Header'
import styles from './index.module.scss'
import Container from '../components/Container'



const Page: FC = (props) => (
  <>
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
    {props.children}
    </Container>
  </>
)

export default Page
