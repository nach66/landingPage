import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import ActivitiesList from './components/ActivitiesList'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Page() {
    return (
        <div>
            <Hero/>
            <About/>
            <ActivitiesList/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}
