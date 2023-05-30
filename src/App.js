import "./App.scss";
import { Formpage } from "./pages/form/form";
import { useState } from "react";
import { Success } from "./pages/successpage/sucess";

function App() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div className="App">
      <div className="container p-3 mt-5 mt-md-0">
        <div className="Form">
          <div className="section p-2 p-md-5  border">
            {validated ? (
              <Success email={email} setvalid={setValidated} />
            ) : (
              <Formpage
                valid={validated}
                setvalid={setValidated}
                email={email}
                setEmail={setEmail}
              />
            )}

            {/* <Success /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
