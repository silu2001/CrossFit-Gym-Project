import React from 'react'

const Footer = () => {
  return (
    <>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="brand">
            <div className="logo-wrap">
              <img
                src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/6255ed3eded8d1889d5dd8cf_crossfit%20gym%20logo.svg"
                alt="CrossFit Gym logo"
                className="logo"
              />
            </div>
            {/* <div className="brand-text">
              <span className="brand-top">CrossFit</span>
              <span className="brand-bottom">Gym</span>
            </div> */}
          </div>

          <nav className="nav">
            <h2 className="nav-title">NAVIGATION</h2>
            <ul className="nav-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">CrossFit Classes</a></li>
              <li><a href="#">Strength Training</a></li>
              <li><a href="#">Personal Training</a></li>
              <li><a href="#">Member Events</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

          <div className="legal">
            <span>Copyright 2022</span>
            <span className="divider">|</span>
            <a href="#" className="credit">Fitr Media</a>
          </div>
        </div>

        <a className="made-in" href="#" aria-label="Made in Webflow">
          Made in Webflow
        </a>
      </footer>

    </>
  )
}

export default Footer
