import { useState, useEffect } from 'react'

const slides = [
  {
    imagen: '/raccu-landing/carrucel1.jpeg',
    texto: 'Controla el tiempo de pantalla de tus hijos y bloquea apps cuando lo necesites',
  },
  {
    imagen: '/raccu-landing/carrucel2.jpeg',
    texto: 'Asigna desafíos cognitivos, físicos y del hogar para que tus hijos ganen RaccuPoints',
  },
  {
    imagen: '/raccu-landing/carrucel3.jpeg',
    texto: 'Tus hijos pueden canjear sus puntos por recompensas que tú defines',
  },
]

function Carrusel() {
  const [actual, setActual] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="carrusel">
      <div
        className="carrusel-slide"
        style={{ backgroundImage: `url(${slides[actual].imagen})` }}
      />
      <div className="carrusel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === actual ? 'dot-activo' : ''}`}
            onClick={() => setActual(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carrusel
