import Code from "./Code";

function BasicPendingErrors() {
  const codeString = `import { useSimpleErrors } from "simple-context-state";
import { useSimplePending } from "simple-context-state";

// This will return all/any actions which have failed
const errors = useSimpleErrors(); 

// This will get any/all actions from the auth store which are in pending state
const pending = useSimplePending("auth"); 

// This will see return either or both of these actions if they are in the errors store 
const errors = useSimpleErrors("auth_login", "products_get"); `;
  return <Code code={codeString} />;
}
export default BasicPendingErrors;
