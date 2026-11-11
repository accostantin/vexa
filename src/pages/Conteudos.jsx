import { useMemo, useState } from 'react'

import BuscaNoticias from '../components/BuscaNoticias.jsx'
import FiltroCategoria from '../components/FiltroCategoria.jsx'
import conteudosData from '../data/conteudos.json'
import ListaNoticias from '../components/ListaNoticias.jsx'
import HeaderLadoA from '../components/HeaderLadoA.jsx'
import Footer from '../components/Footer.jsx'

const OPCOES_VISUAIS = ['Todos', 'Favoritos']

function Conteudos({ favoritos = [], aoAlternarFavorito = () => {} }) {
  const [query, setQuery] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const [filtroVisual, setFiltroVisual] = useState('Todos')

  const categorias = useMemo(
    () => ['Todas', ...new Set(conteudosData.map((conteudo) => conteudo.categoria))],
    []
  )

  const conteudosFiltrados = useMemo(() => {
    const termo = query.trim().toLowerCase()

    return conteudosData.filter((conteudo) => {
      const matchCategoria = categoria === 'Todas' || conteudo.categoria === categoria
      const matchBusca =
        !termo ||
        [conteudo.titulo, conteudo.autor, conteudo.categoria, ...(conteudo.tags ?? [])].some((campo) =>
          String(campo).toLowerCase().includes(termo)
        )

      const matchVisual =
        filtroVisual === 'Todos' ||
        (filtroVisual === 'Favoritos' && favoritos.includes(conteudo.id))

      return matchCategoria && matchBusca && matchVisual
    })
  }, [categoria, filtroVisual, query, favoritos])

  return (
    <div>
      <HeaderLadoA />
    <main className="conteudos-page">

      <header className="conteudos-header">
        <h1>Notícias</h1>
        <div className="conteudos-underline"></div>
      </header>

      <section className="conteudos-toolbar" aria-label="Filtro de conteúdos">
        <div className="conteudos-search-wrap">
          <BuscaNoticias value={query} onChange={setQuery} />
        </div>

        <div className="conteudos-select-wrap">
          <FiltroCategoria
            categorias={categorias.filter((item) => item !== 'Todas')}
            valor={categoria}
            aoAlterar={setCategoria}
            />
        </div>

        <div className="conteudos-visual-toggle" role="tablist" aria-label="Visualização">
          {OPCOES_VISUAIS.map((opcao) => (
            <button
            key={opcao}
            type="button"
            className={filtroVisual === opcao ? 'conteudos-visual-button active' : 'conteudos-visual-button'}
            onClick={() => setFiltroVisual(opcao)}
            >
              {opcao}
            </button>
          ))}
        </div>
      </section>

      <section className="conteudos-grid">
        <ListaNoticias
          conteudos={conteudosFiltrados}
          favoritos={favoritos}
          aoAlternarFavorito={aoAlternarFavorito}
          />
      </section>
    </main>
    <Footer />
  </div>
  )
}

export default Conteudos