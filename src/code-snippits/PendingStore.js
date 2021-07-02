import { Prism } from "react-syntax-highlighter";

function PendingStore() {
  const codeString = `
  // Pending Store is an array of the names of all pending actions 
  
  pending: ["products_get", "auth_login" ]
  `;
  return <Prism language="javascript">{codeString}</Prism>;
}
export default PendingStore;
