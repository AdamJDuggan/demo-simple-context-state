import Code from "./Code";

function BasicState() {
  const codeString = `import { useSimpleState } from "simple-context-state";

function TodosComponent(){
  
  const { todos, todos_add, todos_fetch, clear_errors } = useSimpleState();

  return (

  // todos is the state from the TodoStore  
  {todos.map(todo => (<p>{todo}</p>))}

  // Actions are accessed by storeName_actionName
  <button onClick={() => todos_add("Visit Gran")}>Add</button> 

  // Same for asyncActions
  <button onClick={() => todos_fetch()}>Get todo from API</button>    

  // clear_errors is an in-built action which clears the errors store 
  <button onClick={() => clear_errors()}>Clear errors</button>    
  );

}`;

  return <Code code={codeString} />;
}
export default BasicState;
