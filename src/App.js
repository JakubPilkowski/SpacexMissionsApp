import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./components";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
    </Router>
  );
}

export default App;
