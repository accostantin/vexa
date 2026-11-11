import '../App.css'

function BuscaRoupas({ value = '', onChange = () => {} }) {
  return (
    <div className="search-bar-b">
      <span className="search-icon">🔍</span>
      <input
        type="search"
        placeholder="Buscar por estilo, categoria.."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Buscar roupas"
      />
    </div>
  )
}

export default BuscaRoupas
