import * as React from "react";
import "font-awesome/css/font-awesome.min.css"; // Importez le CSS de font-awesome

const PasswordToggle: React.FC = () => {
  const [isHidden, setIsHidden] = React.useState(true);

  const togglePasswordVisibility = () => {
    const passwordInput = document.querySelector(
      "#registration_form_plainPassword"
    );

    if (passwordInput) {
      if (isHidden) {
        passwordInput.setAttribute("type", "text");
      } else {
        passwordInput.setAttribute("type", "password");
      }
      setIsHidden(!isHidden);
    }
  };

  return (
    <button
      onClick={togglePasswordVisibility}
      className="btn btn-outline-secondary"
    >
      {isHidden ? (
        <>
          <i className="fa fa-eye-slash"></i> Hide
        </>
      ) : (
        <>
          <i className="fa fa-eye"></i> Show
        </>
      )}
    </button>
  );
};

export default PasswordToggle;
