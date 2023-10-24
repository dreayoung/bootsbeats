import Image from 'next/image';
import disc from '../public/disc.png';
import { Tabs, Descriptions } from 'antd';
import BeatsCard from '@/components/BeatsCard';
import { LikeOutlined } from '@ant-design/icons';

const items = [
  {
    key: '1',
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Remark',
    children: 'empty',
  },
  {
    key: '5',
    label: 'Address',
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
];

export default function Forsale() {
  return (
    <main className="min-h-screen text-center lg:px-24 pt-24 uppercase flex flex-col lg:mr-48 px-10">
      <Image
        src={disc}
        className="w-[35rem] absolute md:-right-96 lg:-right-72 bottom-10 hidden lg:block"
        alt="disc logo"
      />

      {/* FOR MOBILE */}
      <Image
        src={disc}
        className="block z-50 lg:hidden w-[20rem] md:w-[35rem] fixed -translate-x-1/2 left-1/2 -bottom-44 md:-bottom-80"
        alt="disc logo"
      />

      <h1 className="text-6xl md:text-8xl font-bold tracking-widest py-6">
        4 sale
      </h1>
      <Descriptions items={items} />
      <p className="text-sm py-8">
        Musicians lay down their tracks, capturing the essence of their music in
        a controlled environment.
      </p>
      <div className="">
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: 'R&B TYPE BEATS',
              key: '1',
              children: (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 lg:mr-24">
                  <BeatsCard />
                  <BeatsCard />
                </div>
              ),
            },
            {
              label: 'PARIS COLLECTION',
              key: '2',
              children: (
                <div className="h-[30vh] lg:h-auto lg:overflow-hidden overflow-y-scroll grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 lg:mr-24">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 lg:mr-24">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 lg:mr-24">
                  <BeatsCard />
                </div>
              ),
            },
            {
              label: '808s Crazy',
              key: '5',
              children: (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 lg:mr-24">
                  <BeatsCard />
                  <BeatsCard />
                  <BeatsCard />
                </div>
              ),
            },
          ]}
        />
      </div>
    </main>
  );
}
