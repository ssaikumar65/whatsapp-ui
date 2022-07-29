import Login from "./components/Login";
import MainComponent from "./components/MainComponent";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<MainComponent />} />
      </Routes>
    </>
  );
}

export default App;
