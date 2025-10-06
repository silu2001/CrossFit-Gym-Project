import React from 'react'

const Membership = () => {
  return (
    <>

  

    <div className="cover">
      
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
      
    </>
  )
}

export default Membership
