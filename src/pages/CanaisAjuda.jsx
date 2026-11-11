import HeaderAjuda from '../components/HeaderAjuda.jsx'
import HeroAjuda from '../components/HeroAjuda.jsx'
import MainAjuda from '../components/MainAjuda.jsx'
import DiretorioCanais from '../components/DiretorioCanais.jsx'
import ProtecaoDenunciante from '../components/ProtecaoDenunciante.jsx'
import Footer from '../components/Footer.jsx'

import '../App.css'

function CanaisAjuda() {
  return (
    <main className="Canais-Ajuda">
      <HeaderAjuda />
      <HeroAjuda />
      <MainAjuda />
      <DiretorioCanais />
      <ProtecaoDenunciante />
      <Footer />

    </main>
  )
}


export default CanaisAjuda
