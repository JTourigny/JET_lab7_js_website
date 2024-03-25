import Image from 'next/image';

export default function Page() {
    return( 
      <main className="flex min-h-screen flex-col p-6">

        <div className="flex h-20 shrink-0 items-center rounded-lg bg-orange-500 p-4 md:h-52">
          <section id="showcase">
        <div className="container">
        <strong><h1 className="text-[40px]">Overwatch Champions Series</h1></strong>
          <p className="text-[32px]">The Future of Competitive Overwatch</p>
        </div>
          </section>
        <link rel="stylesheet" href="./css/style.css" /></div>

        <div className="flex h-20 shrink-0 items-center rounded-lg bg-white-500 p-4 md:h-2">
          <section id="showcase">
        <div className="container">
        </div>
          </section>
        <link rel="stylesheet" href="./css/style.css" /></div>


        <div className="flex h-20 shrink-0 items-center rounded-lg bg-gray-500 p-4 md:h-28">
          <section id="showcase">
        <div className="container">
        <strong><h1 className="text-[30px]">What's Coming to the OWCS..</h1></strong>
        </div>
          </section>
        <link rel="stylesheet" href="./css/style.css" /></div>

        <div className="flex h-20 shrink-0 items-center rounded-lg bg-white-500 p-4 md:h-2">
          <section id="showcase">
        <div className="container">
        </div>
          </section>
        <link rel="stylesheet" href="./css/style.css" /></div>

        <Image
        src="/img/dreamhack.jpg"
        width={1000}
        height={1000}
        className="hidden md:block"
        alt="DreamHack"
      />
      <div className="flex h-20 shrink-0 items-start rounded-lg bg-white-500 p-4 md:h-52">
          <section id="showcase">
        <div className="container">
        <strong><h1 className="text-[24px]">Live Events</h1></strong>
          <p className="text-[24px]">In person events will be taking place at DreamHack Dallas on May 31 and DreamHack Stockholm on November 22.</p>
        </div>
          </section>
        <link rel="stylesheet" href="./css/style.css" /></div>
      <Image
        src="/img/OWWorldCup.jpg"
        width={1000}
        height={1000}
        className="hidden md:block"
        alt="OWWC"
      />
      <div className="flex h-20 shrink-0 items-start rounded-lg bg-white-500 p-4 md:h-52">
          <section id="showcase">
        <div className="container">
        <strong><h1 className="text-[24px]">International Competition</h1></strong>
          <p className="text-[24px]">Competition will take place across North America, Europe, and Asia, with International Events occurring throughout the season.</p>
        </div>
          </section>
        <link rel="stylesheet" href="./css/style.css" /></div>
      <Image
        src="/img/prizingOW.jpg"
        width={1000}
        height={1000}
        className="hidden md:block"
        alt="Prizing"
      />
        <div className="flex h-20 shrink-0 items-start rounded-lg bg-white-500 p-4 md:h-52">
          <section id="showcase">
        <div className="container">
        <strong><h1 className="text-[24px]">Prizing</h1></strong>
          <p className="text-[24px]">There will be $300,000 in prizing across the 4 stages, with additional tournament earnings from crowdfunding.</p>
        </div>
          </section>
        <link rel="stylesheet" href="./css/style.css" /></div>


        <div className="flex h-20 shrink-0 items-center rounded-lg bg-orange-500 p-4 md:h-28">
        <section id="showcase">
      <div className="container">
        <p>A Joshua Tourigny Website, Copyright © 2024</p>
      </div>
        </section>
      <link rel="stylesheet" href="./css/style.css" /></div>
  
  </main>);
  }


