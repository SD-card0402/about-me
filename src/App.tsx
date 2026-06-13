//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import iconpng from './assets/icon.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'
import { NavButton } from './components/NavButton'
import About from './pages/About'
import Contact from './pages/Contact'

const Home = () => {
  return (
    <>
      <section id='header'>
        <div className='header'>
          <h1>My Profile Site</h1>
          <h3>私の素晴らしいサイト</h3>
        </div>
      </section>
      <section id="center">
        <div className="hero">
          {<img src={iconpng} className='base' width='340' height='170' alt='アイコン画像' />
          /* <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" /> */}
        </div>
        <div>
          <h1>My Contents</h1>
          <p>
            このサイトはReactによって構成されています
          </p>
          <section id='navigation'>
            <NavButton />
          </section>
          <section id='navigete'>
            <h3>上のボタンをクリックするとページが変わります</h3>
          </section>
        </div>
      </section>

      <div className="tickas"></div>

      <section id="next-steps">
        {/* <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div> */}
      </section>

      <div className="ticks"></div>
      <section id="spacer">
        <footer> a</footer>
      </section>
    </>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App


