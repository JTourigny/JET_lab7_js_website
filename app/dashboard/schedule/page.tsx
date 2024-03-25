import Image from 'next/image';

export default function Page() {
  return( 
    <main className="flex min-h-screen flex-col p-6">
      <strong><p className="text-[44px]">Schedule</p></strong>

      <div className="flex justify-center">
      <Image
      src="/img/owcs_calender.png"
      width={1000}
      height={1000}
      className="hidden md:block"
      alt="Calender"
      />
      </div>
      
      <div className="flex h-20 shrink-0 items-center rounded-lg bg-white-500 p-4 md:h-52">
        <section id="showcase">
      <div className="container">
        <p className="text-[24px]">In North America, the season will be split into 4 stages, with each having an open qualifier and main event. Through strong placements in stages, teams can compete in in-person events, such as the Major in the middle of the season and the Finals at the end. Competition for the first stage begins March 1, 2024.</p>
      </div>
        </section>
      <link rel="stylesheet" href="./css/style.css" /></div>

      <div className="flex justify-center">
      <Image
      src="/img/owcs_format.png"
      width={1000}
      height={1000}
      className="hidden md:block"
      alt="Format"
      />
      </div>

      <div className="flex h-20 shrink-0 items-center rounded-lg bg-white-500 p-4 md:h-52">
        <section id="showcase">
      <div className="container">
        <p className="text-[24px]">Individual stages will take place across 4 weeks. Week 1 has 9 rounds of Swiss Competition. In Week 2 & 3, the top 16 teams are sorted into 4 Groups based on seeding, where the top 2 teams in each group advance. Finally, the top 8 teams battle it out in a double elimination bracket, with points and prizing given based on performance.</p>
      </div>
        </section>
      <link rel="stylesheet" href="./css/style.css" /></div>

      <div className="flex h-20 shrink-0 items-center rounded-lg bg-gray-300 p-4 md:h-52">
          <section id="showcase">
        <div className="container">
        <strong><h1 className="text-[30px]">Who Can Play</h1></strong>
          <p className="text-[18px]">OWCS has an open qualifier, meaning anyone over the age of 17 can sign up and join a team. Up to 512 teams can compete per region, with a minimum of 5 players and a maximum of 8 players. Up to 2 non-resident players can be on a team for a specified region.There are 24 jurisdictions eligible for North American competition, extending into South America.</p>
        </div>
          </section>
        <link rel="stylesheet" href="./css/style.css" /></div>

        <div className="flex h-20 shrink-0 items-center rounded-lg bg-white-500 p-4 md:h-10">
          <section id="showcase">
        <div className="container">
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