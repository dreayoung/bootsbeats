import Image from 'next/image';
import Link from 'next/link';

import disc from '../public/disc.png';

export default function Home() {
  return (
    <main className="min-h-screen text-center p-10 md:p-24 text-3xl uppercase flex flex-col md:justify-center">
      {/* <div className="tracking-widest py-10 text-lg hidden lg:block">
        <span className="italic text-gray-700 capitalize tracking-wide">
          "Lets groove together"
        </span>{' '}
        - @bootsbeats
      </div> */}
      <div className="mt-32 lg:mt-4 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:justify-around tracking-widest">
        <Link href="/forsale">
          Purchase <br /> Beats
        </Link>
        <Image src={disc} alt="disc" className="w-96" />
        <Link href="/about">About</Link>
      </div>
    </main>
  );
}
