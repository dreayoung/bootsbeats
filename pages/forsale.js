import Image from 'next/image';
import disc from '../public/disc.png';
import { Tabs } from 'antd';
import BeatsCard from '@/components/BeatsCard';

export default function Forsale() {
  return (
    <main className="min-h-screen text-center lg:px-24 pt-24 uppercase flex flex-col lg:mr-48">
      <Image
        src={disc}
        className="w-[35rem] absolute md:-right-96 lg:-right-72 bottom-10 hidden lg:block"
        alt="disc logo"
      />

      {/* FOR MOBILE */}
      <Image
        src={disc}
        className="block lg:hidden w-[20rem] md:w-[35rem] fixed -translate-x-1/2 left-1/2 -bottom-44 md:-bottom-80"
        alt="disc logo"
      />

      <h1 className="text-6xl md:text-8xl font-bold tracking-widest">4 sale</h1>
      <p className="text-sm mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            label: 'R&B TYPE BEATS',
            key: '1',
            children: (
              <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:mx-20 lg:mr-24">
                <BeatsCard />
                <BeatsCard />
              </div>
            ),
          },
          {
            label: 'PARIS COLLECTION',
            key: '2',
            children: (
              <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-8 lg:mr-24">
                <BeatsCard />
                <BeatsCard />
                <BeatsCard />
                <BeatsCard />
              </div>
            ),
          },
          {
            label: 'NIGHT VIBES',
            key: '3',
            children: (
              <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-8 lg:mr-24">
                <BeatsCard />
                <BeatsCard />
                <BeatsCard />
                <BeatsCard />
              </div>
            ),
          },
          {
            label: '48HRTZ',
            key: '4',
            children: (
              <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-8 lg:mr-24">
                <BeatsCard />
              </div>
            ),
          },
          {
            label: '808s Crazy',
            key: '5',
            children: (
              <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-8 lg:mr-24">
                <BeatsCard />
                <BeatsCard />
                <BeatsCard />
              </div>
            ),
          },
        ]}
      />
    </main>
  );
}
