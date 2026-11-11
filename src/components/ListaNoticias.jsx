import CardNoticia from './CardNoticia.jsx'
import EstadoVazioNoticias from './EstadoVazioNoticias.jsx'

function ListaNoticias({ conteudos, favoritos = [], aoAlternarFavorito = () => {} }) {
  if (conteudos.length === 0) return <EstadoVazioNoticias />

  return (
    <section className="lista-conteudos lado-b-grid" aria-label="Lista de conteúdos filtrados">
      {conteudos.map((conteudo) => (
        <CardNoticia
          key={conteudo.id}
          {...conteudo}
          favorito={favoritos.includes(conteudo.id)}
          aoAlternarFavorito={aoAlternarFavorito}
        />
      ))}
    </section>
  )
}

export default ListaNoticias