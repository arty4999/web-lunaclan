import 'normalize.css';
// import '../styles/globals.css'; 
import { Inter } from 'next/font/google';

// Configure the font at module level
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  return (
    // Apply the font class to the root wrapper
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}