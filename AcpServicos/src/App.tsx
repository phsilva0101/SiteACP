import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import OurServices from './pages/OurServices';
import Process from './pages/Process';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import DicasReforma from './pages/Posts/DicasReforma';
import WhatsAppIcon from './components/WhatsAppIcon';
import Footer from './components/Footer';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <Router>
      {/* Navbar fora do Routes */}
      <NavbarComponent />

      {/* Rotas */}
      <Routes>
        {/* Página principal com rolagem suave */}
        <Route
          path="/"
          element={
            <main>
              <Home />
              <About />
              <OurServices />
              <Process />
              <Projects />
              <Contact />
            </main>
          }
        />
        {/* Blog e suas páginas */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/dicas-reformas" element={<DicasReforma />} />
      </Routes>
      <Footer />

      {/* Ícone do WhatsApp */}
      <WhatsAppIcon />
    </Router>
  );
}

export default App;
