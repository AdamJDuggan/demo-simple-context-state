import { Prism } from "react-syntax-highlighter";

export default function Code(props) {
  return (
    <Prism
      customStyle={{ padding: "20px", fontSize: 16 }}
      language="javascript"
    >
      {props.code}
    </Prism>
  );
}
