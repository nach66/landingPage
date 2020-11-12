import React from 'react'

export default function Beach() {
    return (
        <section className="beach-sec">
            <div className="beach">
                <h2>או אולי אתם...</h2>
                    <br/>
                <h4>בין אם אתם טסים לחופשה חלומית, או דווקא כדי לבקר קרוב משפחה שאתם בקושי סובלים - </h4>
                    <br/>
                <article style={{
                        display:'inline-block',
                        marginLeft: '12px'
                    }}>
                    <h1>מעכשיו גם לחיית המחמד שלכם מגיעה חוויה</h1>
                </article>
                <article style={{
                        display:'inline-block',
                        color:'var(--blue)',
                        marginTop:'-20px'
                    }}>
                    <h1>מאלפת!</h1>
                </article>
            </div>
        </section>       
    )
}
