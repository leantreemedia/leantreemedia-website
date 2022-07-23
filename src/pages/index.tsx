import "../styles/layout.scss"
import * as React from "react"
import HeroBackground from "../components/HeroBackground"
import Logo from "../components/objects/Logo"

const IndexPage = () => {
  const [mobileNav, setMobileNav] = React.useState(false);

  return (
    <main>
      <title>Leantree Media</title>
      <header className="main-header">
        <div className="header-cols">
          <div className="header-logo">
            <Logo />
          </div>
          <nav>
            <ul className="header-nav">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Projects</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </nav>
          <div className="highlight"><a href="#">Contact Us</a></div>
        </div>
      </header>
      <header className="mobile-header">
        <div className="header-cols">
          <div className="header-logo">
            <Logo />
          </div>
          <div className="mobile-menu">
            <div className="highlight"><a href="#">Contact Us</a></div>
            <button className="hamburger" onClick={(e) => setMobileNav(true)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav style={{ display: mobileNav ? 'grid' : 'none'}}>
              <button className="close-nav" onClick={(e) => setMobileNav(false)}><span></span><span></span></button>
              <ul className="header-nav">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Projects</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="inner">
          <div className="two-cols">
            <div className="hero-text">
              <h1>Websites that take your business to <span className="underlined"><span>new heights.</span></span></h1>
              <div className="button-group">
                <a className="button button-primary" href="#">Our Pricing</a>
                <a className="button button-secondary" href="#">About Us</a>
              </div>
            </div>
            <article className="contact-form">
              <h1>Send Us Your Idea!</h1>
              <form>
                <div className="inputs">
                  <input type='text' placeholder='name'/>
                  <input type='email' placeholder='email'/>
                </div>
                <textarea placeholder='your idea here'></textarea>
              </form>
            </article>
          </div>
        </div>
        <HeroBackground />
      </section>
      <section className="about"></section>
    </main>
  )
}

export default IndexPage
