import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import NavMenu from './components/NavMenu'
import MainContent from './components/MainContent'
import './assets/css/root.css'
// import "swiper/css";
// import "swiper/css/effect-cube";
// import "swiper/css/pagination";
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavMenu />
      <MainContent />
    </>
  )
}

export default App


{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  */}