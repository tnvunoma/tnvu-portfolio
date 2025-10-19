import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Layout>
  );
};

export default App;
