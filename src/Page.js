import React from 'react'
import Images from './components/Images'
import About from './components/About'
import ActivitiesList from './components/ActivitiesList'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Page() {
    return (
        <div>
            <Images/>
            <About/>
            <ActivitiesList/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}
