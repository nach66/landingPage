import { useTransition, animated, config } from 'react-spring'
import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner';
import a from '../images/כותרת/freedom.jpg'
import b from '../images/כותרת/happy.jpg'

function Images (props) {
    const [index, set] = useState(0);

    return (
        <>
            <section className="void">
            <div className="switch" 
                style={{ 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover',
                    backgroundImage: `url(${a})`
                }}>
                <Banner title="הכלב חולם על חופשה?"/>
                <div className="dream1"/>
                <div className="dream2"/>
            </div>   
            </section>                 
        </>
    );
}

export default Images;