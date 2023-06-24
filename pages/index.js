import Image from 'next/image';
import { Inter } from 'next/font/google';
import  styles from '../styles/Home.module.css';
import Link from 'next/link';

// import GlobalCss from '../styles/globals.css';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>Lorem Ipsum sit amet</p>
      <p className={styles.text}>Lorem Ipsum sut ame</p>
      <Link href="/yunus" className={styles.btn}>See yunus Lits</Link>
    </main>
  )
}
