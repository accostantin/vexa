import CardRoupa from './CardRoupa.jsx'
import EstadoVazioRoupas from './EstadoVazioRoupas.jsx'

function ListaRoupas({ roupas, favoritos = [], aoAlternarFavorito = () => {} }) {
  if (roupas.length === 0) return <EstadoVazioRoupas />

  return (
    <section className="lista-roupas lado-b-grid" aria-label="Lista de roupas filtradas">
      {roupas.map((roupa) => (
        <CardRoupa
          key={roupa.id}
          roupa={roupa}
          favorito={favoritos.includes(roupa.id)}
          aoAlternarFavorito={aoAlternarFavorito}
        />
      ))}
    </section>
  )
}

export default ListaRoupas