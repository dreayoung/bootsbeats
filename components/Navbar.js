import Image from 'next/image';
import soundwave from '../public/soundwave.png';
import logo from '../public/boots-logo.png';

export default function Navbar() {
  return (
    <div className="fixed w-full flex items-center justify-between py-2 px-4 md:px-8">
      <Image src={logo} className="w-14 md:w-20" alt="" />
      <p>&quot;Lets groove together&quot;</p>
      <Image src={soundwave} className="w-14 md:w-20" alt="" />
    </div>
  );
}
