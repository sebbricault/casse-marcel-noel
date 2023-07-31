import * as React from "react";
const { useState } = React;

const PasswordToggle: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);

  const togglePasswordVisibility = () => {
    const passwordInput = document.querySelector("input[type=password]");
    if (passwordInput) {
      if (isHidden) {
        passwordInput.setAttribute("type", "text");
      } else {
        passwordInput.setAttribute("type", "password");
        console.log("oui");
      }
      setIsHidden(!isHidden);
    }
  };

  return (
    <button
      onClick={togglePasswordVisibility}
      className="btn btn-outline-secondary"
    >
      {isHidden ? "Show" : "Hide"}
    </button>
  );
};

export default PasswordToggle;
