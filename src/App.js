import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace/Marketplace";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Marketplace />}>
            <Route path="content" element={<></>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
