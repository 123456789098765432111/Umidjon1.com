import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousel'

import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'

const OPTIONS = { dragFree: true, loop: true ,title:[]}
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const App = () => (                                                                         
  <main className="sandbox45">

    <section className="sandbox__carousel45">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
 
  </main>
)

export default App