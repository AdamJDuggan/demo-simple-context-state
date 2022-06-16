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
  auth: {loggedIn: true, id: 123, name: "Ryu"}
  }`;
const rejected = `state = { 
  pending: []
  errors: [{type: "auth_login", message: "Wrong Password"}]
  auth: {loggedIn: false, id: null, name: null}
  }`;
const example = `const errors = useErrors();
{errors && <ErrorModal message={errors[0].message} />}

// or

const authError = useErrors("auth");
if(authError) <Redirect to={"/login"} />`;

export default function PendingErrors() {
  return (
    <TextBlock title="Pending and Errors stores">
      <div className="mb-4">
        Each SimpleProvider in your app exposes an errors store and pending
        store.
      </div>
      <div className="mb-4">
        The state of the Pending store is an array of strings. The errors store
        is an array of objects which each have a type and message key (both
        strings).
      </div>
      <div className="mb-10">
        All your asyncActions actions will get wrapped in a pending and errors
        state. See the below example of how this works in action...
      </div>
      <div className="ml-4 mr-4">
        <div className="mb-2">I create an app with one store called 'auth'</div>
        <Code code={store} />
        <div className="mt-8 mb-2">Initial app state is...</div>
        <Code code={initial} />
        <div className="mt-8 mb-2">
          The "login" action from auth store is fired...
        </div>
        <Code code={fired} />
        <div className="mt-8 mb-2">If the login action resoles...</div>
        <Code code={resolved} />
        <div className="mt-8 mb-2">If the login action fails...</div>
        <Code code={rejected} />
        <div className="mt-8 mb-2">This enables us to do things like...</div>
        <Code code={example} />
      </div>
    </TextBlock>
  );
}
