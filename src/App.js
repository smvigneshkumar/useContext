import NewComponenet from "./NewComponenet";
import TestContext from "./test-context";
import "./styles.css";
import AuthContext from "./auth-context.js";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState(false);
  const handleToggle = () => {
    setState((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      <AuthContext.Provider value={{ token: state }}>
        <TestContext.Provider value={state}>
          <div className="App">
            <button onClick={handleToggle}>
              {state === true ? "True" : "False"}
            </button>
          </div>
          <NewComponenet />
        </TestContext.Provider>
      </AuthContext.Provider>
    </>
  );
}
