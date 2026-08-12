import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lunaa</title>
        {/* Forces the browser to download the background image immediately */}
        <link rel="preload" href="/bg.webp" as="image" type="image/webp" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Lunaa! 🌙
        </h1>

        <p className={styles.description}>
          There's absolutely nothing here yet, and we're not working on it! 🚧
        </p>
      </main>
    </div>
  );
}