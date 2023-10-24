import Image from 'next/image';
import Link from 'next/link';

import disc from '../public/disc.png';

export default function Home() {
  return (
    <main className="min-h-screen text-center p-10 md:p-24 text-2xl lg:text-3xl uppercase">
      <div className="mt-28 flex flex-col md:flex-row items-center gap-10 md:justify-around tracking-widest">
        <Link href="/forsale">
          Purchase <br /> Beats
        </Link>
        <Image src={disc} alt="disc" className="w-64 md:w-80 lg:w-96" />
        <Link href="/about">About</Link>
      </div>
    </main>
  );
}
