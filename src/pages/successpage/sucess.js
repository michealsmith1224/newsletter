import successCheck from "../../images/icon-success.svg";
import Button from "react-bootstrap/Button";
import "./success.scss";
export const Success = ({ setvalid, email }) => {
  const onclick = () => {
    setvalid(false);
  };
  return (
    <div className="p-3 p-md-5s">
      <div className="success-check mb-4">
        <img src={successCheck} alt="checkbtn" />
      </div>
      <div className="success-heading">
        <h1>Thanks for subscribing</h1>
      </div>
      <div className="success-body my-2">
        <p>
          A confirmation email has been sent to your email <b>{email}</b>.
          Please open it and click the button inside to confirm subscription{" "}
        </p>
      </div>
      <div className="success-button">
        <Button
          type="submit"
          onClick={onclick}
          className="w-100 py-2 success-btn"
        >
          Dismiss Message
        </Button>
      </div>
    </div>
  );
};
