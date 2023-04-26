import React from 'react'
import HeroSection from './HeroSection'
import Highlight from './Highlight'

function Main() {
  return (
    <main>
        <section>
            <HeroSection
            buttonLabel="Reserve Table"
            />
        </section>
        <section>
            <Highlight/>
        </section>
  </main>
  )
}

export default Main
