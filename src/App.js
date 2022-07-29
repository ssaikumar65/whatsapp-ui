import Login from "./components/Login";
import MainComponent from "./components/MainComponent";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<MainComponent />} />
      </Routes>
    </>
  );
}

export default App;
