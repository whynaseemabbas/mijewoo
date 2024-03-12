import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import Header from './components/header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/footer/Footer';
import Card from './components/card/Card';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="header" element={<Header />} />
        <Route path ="banner" element={<Banner />} />
        <Route path ="footer" element={<Footer />} />
        <Route path ="card" element={<Card />} />
         


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
