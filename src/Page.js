import React from 'react'
import Images from './components/Images'
import ActivitiesList from './components/ActivitiesList'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Page() {
    return (
        <div>
            <Images/>
            <ActivitiesList/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}
