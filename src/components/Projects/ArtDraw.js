import React from "react";
import cRock from "../../raw/artDrawStuff/cRock.svg";
import land from "../../raw/artDrawStuff/land.svg";
import planet from "../../raw/artDrawStuff/planet.svg";
import sky from "../../raw/artDrawStuff/sky.svg";

function ArtDraw(props) {
  return (
    <div className="artDrawDiv">
      <div className="wrapper">
        <header>
          <img src={cRock} className="cRock" />
          <img src={land} className="land" />
          <img src={planet} className="planet" />
          <img src={sky} className="sky" />
          <h1>Welcome to Mars!</h1>
        </header>
      </div>

      <section>
        Mars is the fourth planet from the Sun and is known as the Red Planet
        due to its reddish appearance. It is the second smallest planet in the
        solar system and is about half the size of Earth. Mars is a rocky planet
        that is similar to Earth in many ways, which is why it has long been a
        subject of fascination for humans.
        <div id="sd1" className="ADSectionImage"></div>
      </section>
      <section>
        One of the most interesting things about Mars is that it may have had
        liquid water on its surface in the past. There is strong evidence that
        Mars had a much thicker atmosphere and a stable climate in the past,
        which would have allowed liquid water to exist on the planet's surface.
        The presence of water on Mars is significant because it is a key
        ingredient for life as we know it.
        <div id="sd2" className="ADSectionImage"></div>
      </section>
      <section>
        Another reason why Mars is so interesting is because it has the largest
        volcano and the longest canyon in the solar system. Olympus Mons is a
        massive shield volcano on Mars that is almost three times as tall as
        Mount Everest. Valles Marineris is a massive canyon on Mars that
        stretches more than 4,000 miles across the planet's surface, making it
        longer than the United States. Both of these geological features are
        truly awe-inspiring and provide valuable insights into the history and
        evolution of Mars.
        <div id="sd3" className="ADSectionImage"></div>
      </section>
      <section>
        In recent years, Mars has garnered even more attention due to the
        numerous missions to the planet by NASA and other space agencies. These
        missions have revealed that Mars is a dynamic and complex planet with a
        fascinating geology and a history of dramatic climate changes. From
        rover missions that have explored the planet's surface to orbiter
        missions that have mapped the planet's surface and atmosphere, we are
        constantly learning new things about Mars. Overall, Mars is a truly
        remarkable and fascinating planet that continues to captivate our
        imaginations and inspire us to explore the universe. From its potential
        to support life to its stunning geological features, there is much we
        can learn from Mars and much more that we have yet to discover.
        <div id="sd4" className="ADSectionImage"></div>
      </section>
    </div>
  );
}

export default ArtDraw;
