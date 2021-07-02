//Components
import Header from "./components/Header";
import Heading from "./components/Heading";
import Characters from "./components/Characters";
import Description from "./components/Description";
import Install from "./components/Install";
import API from "./components/API";
import Steps from "./components/Steps";
import PendingErrors from "./components/PendingErrors";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="overflow-y-auto max-w-screen-lg mx-auto p-4">
        <Heading />
        <Characters />
        <Description />
        <Install />
        <API />
        <Steps />
        <PendingErrors />
      </div>
      <Footer />
    </>
  );
}

export default App;
