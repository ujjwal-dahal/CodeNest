import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Css/SignupPage.scss";

// Local storage key
const STORAGE_KEY = "signupData";

const SignupPage = () => {
  const navigate = useNavigate();

  // Initial form data state
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [totalData, setTotalData] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  );

  // Handle form field input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Form validation
  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword } = inputData;

    if (!firstName || !lastName || !email || !password) {
      toast.error("All fields are required.");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "bottom-right",
        theme: "colored",
      });
      return false;
    }

    return true;
  };

  // Save data to local storage
  const saveData = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setTotalData(data);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const updatedData = [...totalData, inputData];
      saveData(updatedData);
      toast.success("Registration successful!");
      navigate("/login");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Create Your Account</h1>
        <form onSubmit={handleSubmit}>
          {Object.entries(inputData).map(([key, value]) => (
            <div className="input-group" key={key}>
              <input
                type={key.includes("password") ? "password" : "text"}
                name={key}
                id={key}
                value={value}
                placeholder={`Enter ${key.replace(/([A-Z])/g, " $1")}`}
                onChange={handleInputChange}
                required
                className="signup-input"
              />
            </div>
          ))}
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          <div className="login-prompt">
            <p>Already have an account?</p>
            <Link className="login-link" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
