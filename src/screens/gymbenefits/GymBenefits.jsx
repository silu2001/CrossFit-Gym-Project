import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const services = [
  {
    title: "CrossFit Group Classes",
    image:
      "https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/625eda854730d9f5c66a73f1_CrossFit%20Gym%20class.jpg",
  },
  {
    title: "Strength Training",
    image:
      "https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/6274577dd67c705cb43b1364_empty%20gym.png",
  },
  {
    title: "Personal Training",
    image:
      "https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/6274577dd47d7a42e0ab3502_personal%20trainer%20training%20woman.png",
  },
  {
    title: "Member Only Events",
    image:
      "https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/6274577c8be7db348650f214_athlete%20jumping%20over%20bar.png",
  },
];

const GymBenefits = () => {
  return (
    <>
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Crush your health and fitness goals in no time</h1>
          <p>
            It doesn’t matter if your goal is to get stronger, burn fat, or to
            just stay fit — our world class coaches will guide you every step of
            the way.
          </p>
          <button className="cta-btn">Start 7 day free trial</button>

          <div className="review">
            <div className="stars"><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />
            </div>
            <span className="count">83</span>
            <span className="text">five star reviews</span>
          </div>

          <div className="testimonial">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="profile-img"
            />
            <p>
              “6 months after joining I lost 15lbs and I’m getting stronger.”
            </p>
          </div>
        </div>
      </section>
      <section className="services">
        <h2>We offer something for everybody</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(95, 114, 82, 0.75), rgba(95, 114, 82, 0.75)), url(${service.image})`, }}
            >
              <div className="overlay1"></div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <div className="crossfit-section" id="crossfit">
        <div className="crossfit-content">
          <span className="crossfit-badge">Group CrossFit Classes</span>
          <h1>
            Get fit while having fun with our group CrossFit classes
          </h1>
          <ul className="crossfit-features">
            <li>
              <span className="checkmark">&#10003;</span> Just 30 minutes long
            </li>
            <li>
              <span className="checkmark">&#10003;</span> Warm up & workout included
            </li>
            <li>
              <span className="checkmark">&#10003;</span> Fun is guaranteed
            </li>
          </ul>
        </div>
        <div className="crossfit-image">
          <img src='https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745cde47f24274e42933c0_group%20crossfit%20class.png' alt="Group Crossfit Class" />
        </div>
      </div>
      <div className="strength-section" id="strength">
        <div className="strength-image">
          <img src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745cde8be7db0299512de0_empty%20gym%20with%20strength%20equipment.png" alt="Strength Equipment" />
        </div>
        <div className="strength-content">
          <span className="strength-badge">Strength Training</span>
          <h1>
            Crush any strength program with our suite of strength equipment
          </h1>
          <ul className="strength-features">
            <li>
              <span className="checkmark">&#10003;</span> Fully fitted powerlifting and strongman section
            </li>
            <li>
              <span className="checkmark">&#10003;</span> Olympic lifting platforms, weights, and bars
            </li>
            <li>
              <span className="checkmark">&#10003;</span> Dumbells ranging 5lbs-250lbs
            </li>
          </ul>
        </div>
      </div>

      <div className="personal-section" id="personal">
        <div className="personal-content">
          <span className="personal-badge">Personal Training</span>
          <h1>
            Be guided every step of the
            way with one of our world
            class coaches
          </h1>
          <div className="personal-note">
            We have coaches in each one of the following categories:
          </div>
          <ul className="personal-features">
            <li>
              <span className="checkmark">&#10003;</span> Weightloss
            </li>
            <li>
              <span className="checkmark">&#10003;</span> Competitive CrossFit
            </li>
            <li>
              <span className="checkmark">&#10003;</span> Powerlifting
            </li>
          </ul>
        </div>
        <div className="personal-image">
          <img src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745cde25697910438012db_personal%20trainer%20training%20woman.png" alt="Personal Training Coaching" />
        </div>
      </div>

       <div className="strength-section" id="member">
        <div className="strength-image">
          <img src="https://uploads-ssl.webflow.com/6255cb896cc97d5faf18caf7/62745cde11a53ce362d37ecc_athlete%20jumping%20over%20bar.png" alt="Strength Equipment" />
        </div>
        <div className="strength-content">
          <span className="strength-badge">Member Only Events</span>
          <h1>
           Make new friends and get competitive with fun member events
          </h1>
          <ul className="strength-features">
            <li>
              <span className="checkmark">&#10003;</span> Friendly competitions
            </li>
            <li>
              <span className="checkmark">&#10003;</span> Monthly challenges
            </li>
            <li>
              <span className="checkmark">&#10003;</span> Summer potlucks and games
            </li>
          </ul>
        </div>
      </div>

      <section className="membership-section">

        <button className='member'>Membership</button>
        <h2 className="membership-title">

          Crushing your health and fitness goals starts here...
        </h2>

        <div className="plans">
          <div className="plan-card">
            <h3>Month to Month</h3>
            <p className="price">$165<span>/mo</span></p>
            <ul>
              <li>All classes</li>
              <li>All member events</li>
              <li>Full gym access</li>
            </ul>
            <p className="billing">Charges every month unless you cancel</p>
            <button>Start 7 day free trial</button>
          </div>

          <div className="plan-card">
            <h3>6 Month Membership</h3>
            <p className="price">$145<span>/mo</span></p>
            <ul>
              <li>All classes</li>
              <li>All member events</li>
              <li>Full gym access</li>
            </ul>
            <p className="billing">Charges every 6 months unless you cancel</p>
            <button>Start 7 day free trial</button>
          </div>

          <div className="plan-card">
            <h3>1 Year Membership</h3>
            <p className="price">$125<span>/mo</span></p>
            <ul>
              <li>All classes</li>
              <li>All member events</li>
              <li>Full gym access</li>
            </ul>
            <p className="billing">Charges every year unless you cancel</p>
            <button>Start 7 day free trial</button>
          </div>
        </div>

        <div className="testimonials">
          <div className="testimonial-card">
            <p>“6 months after joining I lost 15lbs and I’m getting stronger.”</p>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
          </div>

          <div className="testimonial-card">
            <p>
              “I’ve gotten so much stronger after joining, it’s insane. My deadlift
              increased by 65lbs.”
            </p>
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User" />
          </div>

          <div className="testimonial-card">
            <p>
              “While I am passionate about health and fitness this gym is more
              like a community to me than anything!”
            </p>
            <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="User" />
          </div>
        </div>
      </section>


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

export default GymBenefits
