import Code from "./Code";

function BasicPendingErrors() {
  const codeString = `import { useSimpleErrors } from "simple-context-state";
import { useSimplePending } from "simple-context-state";

/**
 * Both hooks recieve strings as arguments. The string can be either the name of a 
 * store or the name of a action in a store. Individuals actions are referenced by 
 * storeName_actionName. If no arguements are passed the hook returns all/any actions
 *  in their store.
 */

// This will return all/any actions which have yet to resolve
const pending = useSimplePending(); 

// This will get any/all actions from the auth store which have failed
const errors = useSimpleErrors("auth"); 

// This will check whether either or both of these actions are in the errors store
// The first action is the "login" action in the auth store
// The second action is the "get" action in the products store 
const errors = useSimpleErrors("auth_login", "products_get"); `;
  return <Code code={codeString} />;
}
export default BasicPendingErrors;
