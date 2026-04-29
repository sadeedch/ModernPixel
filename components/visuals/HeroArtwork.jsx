export default function HeroArtwork() {
  return (
    <>
      <div className="experience-badge" aria-hidden="true">
        <span>↙</span>
        <svg viewBox="0 0 200 200">
          <defs>
            <path id="circlePath" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
          </defs>
          <text>
            <textPath href="#circlePath">Premium websites • ModernPixel • Digital growth • </textPath>
          </text>
        </svg>
      </div>

      {/* <div className="play-button" aria-hidden="true">
        <span>▶</span>
      </div> */}

      <div className="hero-media">
        <div className="hero-shape shape-one" />
        <div className="hero-shape shape-two" />
        {/* <div className="plant plant-left"><span /><span /><span /></div> */}
        <div className="screen-frame">
          <div className="screen-glow" />
        </div>
        <div className="person">
          <div className="boy-hair" />
          <div className="boy-head" />
          <div className="neck" />
          <div className="shirt" />
        </div>
        <div className="desk" />
        {/* <div className="pot pot-one" /> */}
        <div className="pot pot-two" />
        <div className="plant plant-right"><span /><span /><span /></div>
      </div>
    </>
  );
}
