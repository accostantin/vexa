
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeaderLadoA from '../components/HeaderLadoA.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Banner from '../components/Banner.jsx';
import SecaoNossaProposta from '../components/SecaoNossaProposta.jsx';
import SecaoEquipeContato from '../components/SecaoEquipeContato.jsx';
import Footer from '../components/Footer.jsx';

import '../App.css';

function LadoA() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contato') {
      // Aguarda a página renderizar antes de rolar
      requestAnimationFrame(() => {
        document.getElementById('contato')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="lado-a-page">

      <HeaderLadoA
        onMenuClick={() => setIsOpen(true)}
      />

      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <Banner />

      <SecaoNossaProposta />

      <div id="contato">
        <SecaoEquipeContato />
      </div>

      <Footer />

    </div>
  );
}

export default LadoA;
