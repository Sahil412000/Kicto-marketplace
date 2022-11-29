import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from "./pages/Marketplace/Marketplace";
import NftItem from "./pages/NftItem/NftItem";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/content" element={<NftItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
