import Button from "react-bootstrap/Button";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import dbg from "../../images/illustration-sign-up-desktop.svg";
export const Formpage = ({ valid, setvalid, email, setEmail }) => {
  const [message, setMessage] = useState("");
  const [greenborder, setGreenborder] = useState(false);
  const onChange = (e) => {
    setEmail(e.target.value);
    const Regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    if (Regex.test(email)) {
      setMessage("Looks Good !");
      setGreenborder(true);
    } else {
      setMessage("invalid Email !");
      setGreenborder(false);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const Regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
    if (Regex.test(email)) {
      setvalid(true);
    } else {
      setvalid(false);
      setMessage("invalid Email address!");
    }
    // const form = event.currentTarget;
    // console.log(form);
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    //   setvalid(true);
    // }
  };
  return (
    <div className="row align-items-center">
      <div className="col-md-6 order-2 order-md-0 ">
        <div className="heading mt-4 mt-md-0">
          <h1>Stay updated!</h1>
        </div>
        <div className="paragraph">
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        {/* ----------------------- */}
        <div className="listings d-flex justify-content-center align-items-start flex-column gap-0 mb-4">
          <div className="item">
            <p className="mb-1">
              <span className="me-1">
                <i class="bi bi-check-circle-fill"></i>
              </span>{" "}
              Product discovery and building what matters
            </p>
          </div>
          <div className="item ">
            <p className="mb-1">
              <span className="me-1">
                <i class="bi bi-check-circle-fill"></i>
              </span>{" "}
              Measuring to ensure updates are a success{" "}
            </p>
          </div>
          <div className="item">
            <p className="mb-1">
              {" "}
              <span className="me-1">
                <i class="bi bi-check-circle-fill"></i>
              </span>{" "}
              And much more
            </p>
          </div>
        </div>
        {/* ----------------------- */}
        {/* -----------form-email---------------------------- */}
        <div className="form-email mb-5 mb-md-0 ">
          <Form noValidate validated={valid} onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3 "
              as={Col}
              controlId="validationCustom01"
            >
              <Form.Label className="form-text">
                <p className="p-0 m-0">Email address</p>
              </Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="email@company.com"
                value={email}
                onChange={onChange}
                style={{
                  border: !greenborder
                    ? "1px solid #dc3545"
                    : "1px solid #198754",
                }}
              />
              <small className={!greenborder ? "text-danger" : "text-success"}>
                {message}
              </small>
            </Form.Group>
            <Button type="submit" className="w-100 py-2 sub-btn">
              subscribe to montly newsletter
            </Button>
          </Form>
        </div>
      </div>
      <div className="col-md-6">
        <div className="imgs">
          <img className="img-fluid" src={dbg} alt="bg" />
        </div>
      </div>
    </div>
  );
};
