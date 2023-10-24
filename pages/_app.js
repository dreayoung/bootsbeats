import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { League_Spartan } from 'next/font/google';

const league = League_Spartan({ subsets: ['latin'], weight: '600' });

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>Boots Beats</title>
      <main className={league.className}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
