import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luna Clan</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta rel="description" content="Lunaclan Homepage" />
        <meta name="theme-color" content="#ffffff"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Luna Clan! 🌙
        </h1>

        <p className={styles.description}>
          There's absolutely nothing here yet, and we're not working on it! 🚧
        </p>
      </main>
    </div>
  );
}