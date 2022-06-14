import "./App.css";
import Index from "./Pages/Uniswap/Index";
import Market from "./Pages/Market/Market";
import GamingGuild from "./Pages/GamingGuild/GamingGuild";
import Footer from "./Layout/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/Market" element={<Market />} />
        <Route exact path="/Analysis" element={<GamingGuild />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
