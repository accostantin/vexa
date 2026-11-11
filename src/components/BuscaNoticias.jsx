import '../App.css'

function BuscaNoticias({ value = '', onChange = () => {} }) {
  return (
    <div className="search-conteudos">
      <span className="search-icon">🔍</span>
      <input
        type="search"
        placeholder="Buscar por Notícias.."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Buscar conteúdos"
      />
    </div>
  )
}

export default BuscaNoticias
