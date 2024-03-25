import '@/app/ui/global.css';

<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <meta name="decription" content="Affordable and professional web design" />
  <meta name="keywords" content="web design, affordable web, professional" />
  <meta name="author" content="Joshua Tourigny" />
  <title> OWCS | Rosters </title>
  <link rel="stylesheet" href="./css/style.css" />
  <header>
    <div className="container">
      <div id="branding">
        <h1>
          <span className="highlight">Overwatch</span> Esports
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="index.html">Home</a>{" "}
          </li>
          <li>
            <a href="about.html">Schedule</a>{" "}
          </li>
          <li className="current">
            <a href="services.html">Rosters</a>{" "}
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <section id="main">
    <div className="container">
      <article id="main-col">
        <h1 className="page-title">
          Here are some of the announced rosters to look forward to!
        </h1>
        <ul id="services">
          <li>
            <h3>Toronto Defiant</h3>
            <p>Roster: Someone, Sugarfree, Mer1t, Rupal, Vega</p>
            <p>Region: NA</p>
            <img src="./img/defiant_roster.jfif" />
          </li>
          <li>
            <h3>Falcons Overwatch</h3>
            <p>
              Roster: Smurf, Hanbin, Proper, Stalk3r, Fielder, Chiyo, SirMajed
            </p>
            <p>Region: APAC</p>
            <img src="./img/falcons_roster.jfif" />
          </li>
          <li>
            <h3>Team FTG</h3>
            <p>Roster: Belosrea, Bernar, AlphaYi, Flora, Finn, Viol2t</p>
            <p>Region: APAC</p>
            <img src="./img/ftg_roster.jfif" />
          </li>
          <li>
            <h3>We Spit Fire</h3>
            <p>Roster: Hadi, Backbone, SparkR, Landon, FunnyAstro</p>
            <p>Region: EMEA</p>
            <img src="./img/spitfire_roster.jfif" />
          </li>
        </ul>
      </article>
    </div>
  </section>
  <footer>
    <p>A Joshua Tourigny Website, Copyright © 2024</p>
  </footer>
</>
