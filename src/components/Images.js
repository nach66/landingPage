import { useTransition, animated, config } from 'react-spring'
import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner';
import a from '../images/כותרת/b1.jpg'
import b from '../images/כותרת/b2.jpg'
import c from '../images/כותרת/b3.jpg'
import d from '../images/כותרת/b4.jpg'

const slides = [
    { id: 0, url: a },
    { id: 1, url: b },
    { id: 2, url: c },
    { id: 3, url: d },
  ]
function Images (props) {
    const [index, set] = useState(0);

    useEffect(() => {
        setInterval(() => set(state => (state + 1) % 4), 5000);
    }, []);

    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })

    return (
        <>
            {transitions.map(({ item, props, key }) => (
            <animated.div
                key={key}
                class="bg"
                style={{ ...props, backgroundImage: `url(${item.url}` }}
            />
            ))}
            <div className="switch">
                    <Banner title="כותרת"
                            subtitle="משנה">
                    </Banner>
            </div>
        </>
    );
}

export default Images;