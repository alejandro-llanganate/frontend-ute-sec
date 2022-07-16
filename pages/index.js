import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { Link } from '@chakra-ui/react';


export default function HomeApp() {

  const router = useRouter();

  useEffect(() => {
    router.push('login');
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>UTE-SEC</title>
        <meta name="description" content="UTE-SEC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div mt="50%">
          <Link href="/login"></Link>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
