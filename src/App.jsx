import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import './styles/App.scss';
import './styles/Header.scss';
import './styles/Home.scss';
import './styles/Footer.scss';
import './styles/contact.scss';
import './styles/services.scss';
import './styles/responsive.scss';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header/>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/contact" element={<Contact/>}/>
          <Route  path="/services" element={<Services/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
