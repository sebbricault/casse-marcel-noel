import * as React from "react";
import "font-awesome/css/font-awesome.min.css"; // Importez le CSS de font-awesome

const PasswordToggle: React.FC = () => {
  const [isHidden, setIsHidden] = React.useState(true);

  const togglePasswordVisibility = () => {
    const passwordInput = document.querySelector(
      "#registration_form_plainPassword"
    );
    const passwordInput1 = document.querySelector("#inputPassword");

    if (passwordInput) {
      if (isHidden) {
        passwordInput.setAttribute("type", "text");
      } else {
        passwordInput.setAttribute("type", "password");
      }
      setIsHidden(!isHidden);
    }
    if (passwordInput1) {
      if (isHidden) {
        passwordInput1.setAttribute("type", "text");
      } else {
        passwordInput1.setAttribute("type", "password");
      }
      setIsHidden(!isHidden);
    }
  };

  return (
    <button
      type="button"
      onClick={togglePasswordVisibility}
      className="btn btn-outline-secondary mb-3"
    >
      {isHidden ? (
        <>
          <i className="fa fa-eye-slash "></i> Hide
        </>
      ) : (
        <>
          <i className="fa fa-eye "></i> Show
        </>
      )}
    </button>
  );
};

export default PasswordToggle;
