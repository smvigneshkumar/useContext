import AuthContext from "./auth-context";
import TestContext from "./test-context";
// import { useContext } from "react";
const NewComponenet = () => {
  // const contextValue = useContext(AuthContext);
  return (
    <AuthContext.Consumer>
      {(token) => (
        <TestContext.Consumer>
          {(test) => (
            <div>
              <h1>{test === true ? "Test True" : " Test False"}</h1>
              <h1>{token.token === true ? "True" : "False"}</h1>
            </div>
          )}
        </TestContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
  // return (
  //   <div>
  //     <h1>{contextValue.token === true ? "True" : "False"}</h1>
  //   </div>
  // );
};
export default NewComponenet;
