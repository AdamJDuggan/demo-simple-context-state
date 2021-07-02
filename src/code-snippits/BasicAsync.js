import { Prism } from "react-syntax-highlighter";

function BasicAsync() {
  const codeString = `
  // Stores can have both actions and asyncActions as properties 
  
  const TodosStore = {
  name: "todos",
  initialState: [],
  asyncActions: {
    add: (state) => (payload) => async () => {
      const response = await fetch("...")
      const newState = [...state, response];
      return newState;
    },
  },
};
`;
  return <Prism language="javascript">{codeString}</Prism>;
}
export default BasicAsync;
