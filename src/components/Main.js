import React from 'react'
import HeroSection from './HeroSection'
import Highlight from './Highlight'
import Testimonial from './Testimonial'
import Info from './Info'

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
        <section>
            <Testimonial/>
        </section>
        <section>
            <Info/>
        </section>
  </main>
  )
}

export default Main
