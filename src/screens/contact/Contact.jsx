import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="cover">
      
    </div>
     <section className="membership-section">
        <div className="intro">
          <button className="about-btn">About CrossFit Gym</button>
          <h1>
            Hi! We're a local <span>CrossFit gym</span> in <br /> Denver, Colorado.
          </h1>
          <p>
            CrossFit Gym was started by Alex and Sparky in 2012. It’s our mission
            to help people in Denver get fit, stay healthy, and live life on their
            terms without fitness being an obstacle.
          </p>
        </div>

        <div className="trial-section">
          <div className="form-container">
            <h2>Claim your 7 day free trial</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone number" required />
              <select>
                <option>Membership interest...</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="image-container">
            <img
              src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62753464528a3644b1eb3c80_two%20trainers.png"
              alt="Gym trainers"
            />
          </div>
        </div>
      </section>

      
    </>
  )
}

export default Contact
