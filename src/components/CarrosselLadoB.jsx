import { useState } from 'react'
import '../assets/css/carrossel.css'
import imagem1 from '../assets/img/carrossel-1.jpg'
import imagem2 from '../assets/img/carrossel-2.jpg'
import imagem3 from '../assets/img/carrossel-3.jpg'

function CarrosselLadoB() {
  const imagens = [imagem1, imagem2, imagem3]

  const [indice, setIndice] = useState(0)

  function proximo() {
    setIndice((indice + 1) % imagens.length)
  }

  function anterior() {
    setIndice((indice - 1 + imagens.length) % imagens.length)
  }

  return (
    <main>
      <div className="Carrossel">
        <button className="botaoesquerda" onClick={anterior}>
          ◀
        </button>
        <img
          src={imagens[indice]}
          alt={`Slide ${indice + 1}`}
          className="imagem"
        />
        <button className="botaodireita" onClick={proximo}>
          ▶
        </button>
      </div>
    </main>
  )
}

export default CarrosselLadoB;