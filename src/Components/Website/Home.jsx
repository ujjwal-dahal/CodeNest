import { useNavigate } from "react-router-dom";
import "../../Styles/Home.css";
import useTitle from "../../Hooks/useTitle/useTitle";

export default function Home() {
  const navigate = useNavigate();
  useTitle("CODENEST | Home");

  return (
    <div className="home-container">
      <div className="hero-section">
        <h2>Welcome to CODENEST</h2>
        <p>
          Start your journey here. Discover our diverse range of services and
          resources to help you achieve more.
        </p>
        <button className="cta-button" onClick={() => navigate("/about")}>
          About Us
        </button>
      </div>
      <div className="features-section">
        <h3>Our Features</h3>
        <div className="features-grid">
          <FeatureItem
            title="Feature 1"
            description="Experience our powerful feature to enhance productivity."
          />
          <FeatureItem
            title="Feature 2"
            description="Explore tools designed to streamline your work."
          />
          <FeatureItem
            title="Feature 3"
            description="Leverage tailored solutions to meet your unique needs."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ title, description }) {
  return (
    <div className="feature-item">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
