import Head from 'next/head';
import styles from '../styles/test.module.css'

const about = () => {
  return ( 
    <div>
      <Head>
        <title>Yunus List | About</title>
        <meta name="keyword" content="yunus"></meta>
      </Head>
      <h1 className={styles.error}>About</h1>
      <p>Loerem insum sit amet</p>
      <p>Lorem insum sit amet</p>
    </div>
   );
}
 
export default about;
