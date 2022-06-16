import Code from "./Code";

function BasicProvider() {
  const codeString = `import { SimpleProvider } from "simple-context-state";
import { TodoStore } from "./stores/Todos.js"  // ect
  
// Example with one provider for whole app (index.js file)
ReactDOM.render(
<SimpleProvider component={<App />} stores={[TodosStore, AnotherStore]} />,
document.getElementById("root")
);


// Example of using multiple providers in larger applications (App.js file)
function App() {
  return (
    <>
    <SimpleProvider component={<TodosComponent />} stores={[TodosStore]} />
    <SimpleProvider component={<FoodComponent />} stores={[FruitStore, VegetableStore]} />
    </>
  )
}`;
  return <Code code={codeString} />;
}
export default BasicProvider;
