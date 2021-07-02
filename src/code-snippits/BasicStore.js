import Code from "./Code";

function BasicStore() {
  const codeString = `const TodosStore = {
  name: "todos",
  initialState: ["Buy milk", "Start running", "Fix bike"],
  actions: {
    add: (state) => (payload) => {
      const newState = [...state, payload];
      return newState;
    },
  },
  asyncActions: {
     fetch: (state) => (payload) => async () => {
      const response = await fetch("https://...");
      const newState = [...state, response];
      return newState;
    }
  }
};`;
  return <Code code={codeString} />;
}
export default BasicStore;
