import { useNavigate } from "react-router-dom";
import "../../Styles/About.css";
import useTitle from "../../Hooks/useTitle/useTitle";

export default function About() {
  const navigate = useNavigate();
  useTitle("CODENEST | About");

  return (
    <div className="about-container">
      
      <section className="hero-section">
        <h1>About Us</h1>
        <p>
          Welcome to our company! <br />
          We are dedicated to providing top-notch services and innovative solutions to help you succeed. 
          Whether you're looking for resources, support, or expertise, we've got you covered.
        </p>
        <button className="cta-button" onClick={() => navigate("/about")}>
          Learn More
        </button>
      </section>

      
      <section className="features-section">
        <h2 id="offer-text">What We Offer</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Innovative Solutions</h3>
            <p>
              Leverage cutting-edge tools and technologies that simplify complex tasks and maximize efficiency. We
              continuously improve our offerings to meet your evolving needs.
            </p>
          </div>
          <div className="feature-item">
            <h3>Expert Guidance</h3>
            <p>
              Our team of experts is here to support you every step of the way, providing insights and recommendations
              tailored to your unique challenges.
            </p>
          </div>
          <div className="feature-item">
            <h3>Customer-Centric Approach</h3>
            <p>
              We prioritize your experience and satisfaction, ensuring that our solutions are aligned with your specific
              goals and preferences.
            </p>
          </div>
        </div>
      </section>

      
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>
          Join us today and take the first step towards transforming your ideas into reality. We're here to help you
          achieve success.
        </p>
        <button className="cta-button" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </section>
    </div>
  );
}
