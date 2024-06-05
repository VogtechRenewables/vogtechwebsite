import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Team from "./pages/Team";
import PageNotFound from "./pages/PageNotFound";
import Values from "./pages/Values";
import Sectors from "./pages/Sectors";
import Projects from "./pages/Projects";
import News from "./pages/News";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team/>} />
          <Route path="/values" element={<Values/>} />
          <Route path="/sectors" element={<Sectors/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
