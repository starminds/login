import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { GlobalStyled } from "./style/GlobalStyled";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
