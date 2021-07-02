import { Prism } from "react-syntax-highlighter";

function Errors() {
  const codeString = `
  // Errors store is an array of objects of all failed actions

  errors: [ {type: "auth_login", message: "Wrong password"} ]
  `;
  return <Prism language="javascript">{codeString}</Prism>;
}
export default Errors;
