import infinityLogo from './assets/img/jpg/infinity-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='background-home' />
      <header className='header-home'>
        <div className='header-home__logo'>
          <img src={infinityLogo} width='350px' style={{ color: 'white' }} />
        </div>
        <div className='header-home__title'>
          Infinite Language Studio
        </div>
      </header>
      <div className='menu'>
        <div>Nuestro Servicios</div>
        <div>Quiénes Somos</div>
        <div>Contacto</div>
        <div>Idioma</div>
      </div>
      <div className='slogan'>
        <div>
          “ Trabajamos con un universo infinito de posibilidades
          y conexiones: <span>idiomas</span> ”
        </div>
      </div>
    </div>
  );
}

export default App;
