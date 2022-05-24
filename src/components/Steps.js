import TextBlock from "./TextBlock";
import BasicStore from "../code-snippits/BasicStore";
import BasicProvider from "../code-snippits/BasicProvider";
import BasicState from "../code-snippits/BasicState";
import BasicPendingErrors from "../code-snippits/BasicPendingErrors";

const Step = (props) => (
  <div className="mb-16">
    <div className="flex content-center mb-4">
      <strong style={{ color: "#00D1B2" }} className="text-2xl mr-2 rounded">
        {props.number}
      </strong>
      <div>{props.title}</div>
    </div>
    {props.code}
  </div>
);

export default function Steps() {
  return (
    <TextBlock title="4 steps to success">
      <div className="mx-4 pt-6">
        <Step
          number="1"
          title="Create your own stores as basic objects with a name (string), initialState
                (any data type), actions (object of functions) and asyncActions
                (object of asynchronous functions)."
          code={<BasicStore />}
        />
        <Step
          number="2"
          title="Wrap a React component with SimpleProvider and pass your stores to it as an array."
          code={<BasicProvider />}
        />
        <Step
          number="3"
          title="Access state and actions from your stores in components."
          code={<BasicState />}
        />
        <Step
          number="4"
          title="Access the built-in errors and pending state. Both hooks recieve strings as arguments. 
          See more details on these stores in the next section"
          code={<BasicPendingErrors />}
        />
      </div>
    </TextBlock>
  );
}
