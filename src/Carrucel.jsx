import { useState, useEffect } from 'react'

const slides = [
{
    imagen: '/carrucel1.jpeg',
    texto: 'Controla el tiempo de pantalla de tus hijos y bloquea apps cuando lo necesites',
},
{
    imagen: '/carrucel2.jpeg',
    texto: 'Asigna desafíos cognitivos, físicos y del hogar para que tus hijos ganen RaccuPoints',
},
{
    imagen: '/carrucel3.jpeg',
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
    >
        <div className="carrusel-overlay" />
    </div>
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