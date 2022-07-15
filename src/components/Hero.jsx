import heroIntro from "../assets/images/illustration-intro.png";
export default function Hero() {
  return (
    <section className="hero ">
      <div className="hero-container container">
        <div className="hero-image">
          <img src={heroIntro} alt="intro image" />
        </div>
        <div className="hero-text">
          <h1 className="hero-header">
            All your files in one secure location, <br /> accessible anywhere.
          </h1>
          <p className="hero-description">
            Flyo stores all your most important files in one secure location.
            Access them whever you need, share and collaborates with friends,
            family, and co-workers.
          </p>
          <button className="btn-get">Get Started</button>
        </div>
      </div>
    </section>
  );
}
