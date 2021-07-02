import TextBlock from "./TextBlock";
import Code from "../code-snippits/Code";

const store = `const AuthStore = {
  name: "auth",
  initialState: {loggedIn: false, id: null, name: null},
  asyncActions: {
     login: (state) => (payload) => async () => {
      const user = await fetch("https://...");
      return {loggedIn: true, id: user.id, name: user.name };
    }
  }
};`;

const initial = `state = { 
  pending: []
  errors: []
  auth: {loggedIn: false, id: null, name: null}
  }`;
const fired = `state = { 
  pending: ["auth_login"]
  errors: []
  auth: {loggedIn: false, id: null, name: null}
  }`;
const resolved = `state = { 
  pending: []
  errors: []
  auth: {loggedIn: true, name: "Ryu", id: 123}
  }`;
const rejected = `state = { 
  pending: []
  errors: [{type: "auth_login", message: "Wrong Password"}]
  auth: {loggedIn: false, id: null, name: null}
  }`;

export default function PendingErrors() {
  return (
    <TextBlock title="Pending and Errors stores">
      <div className="mb-4">
        Each SimpleProvider in your app exposes an errors store and pending
        store.
      </div>
      <div className="mb-4">
        The pending store returns an array of strings. The errors store returns
        an array of objects which each have a type and message key (both
        strings).
      </div>
      <div className="mb-10">
        All your asyncActions actions will get wrapped in a pending and errors
        state.
      </div>
      <div className="ml-4 mr-4">
        <div style={{ color: "#00d1b2" }} className="mb-6 font-bold">
          Example...
        </div>
        <div className="mb-2">Store</div>
        <Code code={store} />
        <div className="mt-6 mb-2">Initial app state</div>
        <Code code={initial} />
        <div className="mt-6 mb-2">Login action gets fired</div>
        <Code code={fired} />
        <div className="mt-6 mb-2">Login action resoles</div>
        <Code code={resolved} />
        <div className="mt-6 mb-2">Login action rejected</div>
        <Code code={rejected} />
      </div>
    </TextBlock>
  );
}
