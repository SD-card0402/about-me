//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import icon from './assets/icon.png'

import styles from './App.module.css'
import { Layout } from './components/Layout'
import About from './pages/About'
import Hobby from './pages/Hobby'
import Contact from './pages/Contact'


const Home = () => {
  return (
    <Layout>
      <section className={styles.center}>
        <div className={styles.hero}>
          <img src={icon} className={styles.base} width='340' height='170' alt='アイコン画像' />
        </div>
        <div>
          <h1>My Contents</h1>
          <p>
            このサイトはReactによって構成されています
          </p>
          <h3>ボタンをクリックするとページが変わります</h3>
        </div>
      </section>

      <div className={styles.ticks}></div>

      <section className={styles.nextSteps}>
      </section>

      <div className="ticks"></div>
    </Layout>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/hobby" element={<Hobby />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App


