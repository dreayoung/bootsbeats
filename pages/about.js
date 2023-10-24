import Image from 'next/image';
import disc from '../public/disc.png';

export default function About() {
  return (
    <main className="min-h-screen text-center lg:px-24 pt-32 uppercase flex flex-col md:mr-20 lg:ml-48">
      <Image
        src={disc}
        className="hidden lg:block w-[35rem] absolute -left-72 bottom-0"
        alt="disc logo"
      />

      {/* FOR MOBILE */}
      <Image
        src={disc}
        className="block lg:hidden w-[20rem] fixed -translate-x-1/2 left-1/2 -bottom-44"
        alt="disc logo"
      />

      <h1 className="text-5xl lg:text-8xl font-bold tracking-widest">About</h1>
      <p className="px-8 lg:px-32 lg:leading-8 md:text-[1rem] lowercase py-6">
        Welcome to Boots Beats, a state-of-the-art recording studio where music,
        sound, and creativity converge to craft the soundscape of the future.
        This documentation provides an insider's view into the world of
        recording, showcasing the essential components and processes that make
        this studio a hub for musical artistry.
      </p>
      <div className="px-8 lg:px-32">
        <div className="text-left tracking-widest underline underline-offset-8">
          Notable Clients
        </div>
        <div className="flex items-center mt-20">
          <Image
            src="https://images.nightcafe.studio/jobs/l1FFrElex1lUGFr9RWPD/l1FFrElex1lUGFr9RWPD.jpg?tr=w-1600,c-at_max"
            width={100}
            height={100}
            alt="kanye"
            className="w-16 lg:w-28 rounded-[2.5rem] absolute hover:z-50"
          />
          <Image
            src="https://i.redd.it/7r3d9nlxyd991.png"
            width={100}
            height={100}
            alt="kanye"
            className="w-16 lg:w-28 rounded-[2.5rem] absolute ml-14 hover:z-50 hover:shadow-lg"
          />
          <Image
            src="https://cdn.ebaumsworld.com/mediaFiles/picture/718392/87405262.jpg"
            width={100}
            height={100}
            alt="kanye"
            className="w-16 lg:w-28 rounded-[2.5rem] absolute ml-28 hover:z-50 hover:shadow-lg"
          />
          <Image
            src="https://i.kym-cdn.com/photos/images/newsfeed/002/428/162/14d.png"
            width={100}
            height={100}
            alt="kanye"
            className="w-16 lg:w-28 rounded-[2.5rem] absolute ml-48 hover:z-50 hover:shadow-lg"
          />
          <Image
            src="https://www.diplo.co.uk/media/2324/seed_74_00014.png?width=512&height=512&mode=crop"
            width={100}
            height={100}
            alt="kanye"
            className="w-16 lg:w-28 rounded-[2.5rem] absolute ml-64 hover:shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
