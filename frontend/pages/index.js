import Head from "next/head";
import { Intro } from "~/components/units/home/Intro";
// import Image from "next/image";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Concurrent Reminders</title>
        <meta
          name='description'
          content='An simple way to be reminded about my awesome recurrent tasks'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <main className='min-h-screen bg-[#141426] '>
        <Intro />
        <div></div>
      </main>

      <footer className=''></footer>
    </div>
  );
}
