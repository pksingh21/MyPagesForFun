import "./App.css";
import Features from "../src/Features/Feature";
import NewFeatures from "../src/Features/NewFeature";
import Intro from "../src/Features/Intro";
import Ending from "../src/Features/Ending";
function App() {
  return (
    <div className="app">
      <Intro />
      <NewFeatures />
      <Ending />
    </div>
  );
}

export default App;
