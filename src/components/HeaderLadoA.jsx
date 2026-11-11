import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BotaoIrLadoB from './BotaoIrLadoB.jsx';
import BotaoMenu from './BotaoMenu.jsx';
import Sidebar from './Sidebar.jsx';


function HeaderLadoA({ onMenuClick }) {

  // Páginas que já controlam o próprio Sidebar (ex.: Lado A) passam onMenuClick.
  // As demais (Notícias, Dashboard, Conteúdos) usam o menu embutido aqui.
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className="header">

        <BotaoMenu onMenuClick={onMenuClick ?? (() => setMenuAberto(true))} />

        <div className="logo">
          <h1 className="titulo">VEXA</h1>
        </div>

        <nav>
          <NavLink to="/conteudos">Notícias</NavLink>
          <NavLink to="/lado-b/dashboard">Dashboard</NavLink>
          <NavLink to="/sobreConteudos">Conteúdos</NavLink>
          <NavLink to="/lado-a#contato">Contato</NavLink>
        </nav>

        <BotaoIrLadoB />

      </header>

      {!onMenuClick && (
        <Sidebar
          isOpen={menuAberto}
          onClose={() => setMenuAberto(false)}
        />
      )}
    </>
  );
}

export default HeaderLadoA;
