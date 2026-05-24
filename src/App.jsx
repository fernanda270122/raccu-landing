import './App.css'
import Carrusel from './Carrusel'

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <img src="/racculogo.png" alt="Raccu Logo" className="nav-logo" />
        <ul className="nav-links">
          <li><a href="#descripcion">¿Qué es?</a></li>
          <li><a href="#caracteristicas">Características</a></li>
          <li><a href="#como-funciona">Cómo funciona</a></li>
          <li><a href="#descarga">Descargar</a></li>
        </ul>
      </nav>

      {/* HERO */}
        <section className="hero">
          <div className="hero-top">
            <div className="hero-text">
              <h1>Control parental <span>inteligente</span> para familias modernas</h1>
              <p>Raccu te ayuda a proteger el tiempo digital de tus hijos de forma positiva, con desafíos, recompensas y bloqueos inteligentes.</p>
              <a href="#descarga" className="btn-primary">Descargar ahora</a>
            </div>
            <div className="hero-img">
              <img src="/raccu_sn.png" alt="Mascota Raccu" />
            </div>
          </div>
          <div className="hero-bottom">
            <Carrusel />
          </div>
        </section>

      {/* CARRUSEL 
      <section className="seccion-carrusel">
        <h2>Raccu en acción</h2>
        <Carrusel />
      </section>
      */}
      {/* DESCRIPCIÓN */}
        <section className="descripcion" id="descripcion">
        <div className="descripcion-contenido">
          <h2>¿Qué es Raccu?</h2>
          <p>
            Raccu es una aplicación de control parental que permite a los padres
              gestionar el uso del dispositivo móvil de sus hijos de manera inteligente
              y positiva. A través de bloqueos programados, desafíos y un sistema de
              recompensas, Raccu fomenta hábitos digitales saludables en familia,
              promoviendo la responsabilidad y el equilibrio en el uso de la tecnología.
          </p>
          <div className="descripcion-stats">
            <div className="stat">
              <h3>100%</h3>
              <p>Control parental</p>
            </div>
            <div className="stat">
              <h3>2 roles</h3>
              <p>Padre e hijo</p>
            </div>
            <div className="stat">
              <h3>Gratis</h3>
              <p>Descarga gratuita</p>
            </div>
          </div>
        </div>
      </section>
      {/* CARACTERÍSTICAS */}
        <section className="caracteristicas" id="caracteristicas">
          <h2>¿Qué puedes hacer con Raccu?</h2>
          <div className="cards">
            <div className="card">
              <span className="card-icon">🔒</span>
              <h3>Bloqueo de apps</h3>
              <p>Bloquea aplicaciones de forma inmediata o por horarios programados según el día y la hora.</p>
            </div>
            <div className="card">
              <span className="card-icon">🎯</span>
              <h3>Desafíos</h3>
              <p>Asigna retos cognitivos, físicos o del hogar. Tus hijos suben fotos como evidencia para ganar puntos.</p>
            </div>
            <div className="card">
              <span className="card-icon">⭐</span>
              <h3>Recompensas</h3>
              <p>Tus hijos canjean sus puntos por recompensas que tú defines o que pueden elegir en conjunto. Tú apruebas cada canje.</p>
            </div>
            <div className="card">
              <span className="card-icon">🦝 </span>
              <h3>Mascota Raccu</h3>
              <p>Cada hijo tiene su propio mapache que evoluciona conforme acumula más puntos.</p>
            </div>
            <div className="card">
              <span className="card-icon">📊</span>
              <h3>Actividad diaria</h3>
              <p>El panel del padre muestra el tiempo de uso, desafíos completados y puntos de cada hijo.</p>
            </div>
            <div className="card">
              <span className="card-icon">🔔</span>
              <h3>Notificaciones</h3>
              <p>Recibe alertas cuando un bloqueo inicia o termina, y cuando tu hijo solicita un canje.</p>
            </div>
          </div>
        </section>
        {/* CÓMO FUNCIONA */}
        <section className="como-funciona" id="como-funciona">
          <h2>¿Cómo funciona?</h2>
          <div className="pasos">
            <div className="paso">
              <div className="paso-numero">1</div>
              <h3>El padre crea su cuenta</h3>
              <p>Regístrate como padre y agrega a tus hijos desde el panel de control.</p>
            </div>
            <div className="paso-linea"></div>
            <div className="paso">
              <div className="paso-numero">2</div>
              <h3>El hijo instala Raccu</h3>
              <p>Al registrar a tu hijo aparece un QR. Que lo escanee, descargue e instale la app.</p>
            </div>
            <div className="paso-linea"></div>
            <div className="paso">
              <div className="paso-numero">3</div>
              <h3>Configura bloqueos y desafíos</h3>
              <p>Define qué apps bloquear, en qué horarios, y asigna desafíos para ganar puntos.</p>
            </div>
            <div className="paso-linea"></div>
            <div className="paso">
              <div className="paso-numero">4</div>
              <h3>Tu hijo gana recompensas</h3>
              <p>Al completar desafíos acumula puntos y los canjea por premios que tú apruebas.</p>
            </div>
          </div>
        </section>
        {/* DESCARGA */}
        <section className="descarga" id="descarga">
          <div className="descarga-contenido">
            <div className="descarga-texto">
              <h2>Descarga Raccu</h2>
              <p>Disponible para Android. Escanea el código QR con la cámara de tu celular para descargar la app.</p>
              <ul className="descarga-lista">
                <li>✔ Descarga gratuita</li>
                <li>✔ Solo para Android</li>
                <li>✔ Sin anuncios</li>
              </ul>
            </div>
            <div className="descarga-qr">
              <img src="/raccu_qr.png" alt="QR de descarga de Raccu" />
              <p>Escanea para descargar</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <img src="/racculogo.png" alt="Raccu" className="footer-logo" />
          <p>© 2026 Raccu. Todos los derechos reservados.</p>
        </footer>

    </div>
  )
}

export default App