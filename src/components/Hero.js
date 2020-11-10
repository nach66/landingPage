import React from 'react'
import a from '../images/כותרת/freedom.jpg'
import Banner from '../components/Banner';

export default function Hero() {
    return (
        <>
            <section className="void">
                <div className="pic">
                <Banner title="הכלב חולם על חופשה?"/>
                    <div className="dream1"/>
                    <div className="dream2"/>
                </div>   
            </section>

            <div className="bout"></div>
            
            <section class="first-spikes"></section>
            <section class="light-spikes"></section>
            <section class="blue-spikes"></section>
            <section class="spikes"></section>
            
            <section className="pink-sec">
                    <h2>או אולי אתם...</h2>
                    <h4>בין אם אתם טסים לחופשה חלומית, או דווקא כדי לבקר קרוב משפחה שאתם בקושי סובלים - </h4>
                    <article style={{
                        display:'inline-block',
                        marginLeft: '12px'
                    }}>
                        <h1>מעכשיו גם לחיית המחמד שלכם מגיעה חוויה</h1>
                    </article>
                    <article style={{
                        display:'inline-block',
                        color:'var(--lightblue)',
                        marginTop:'-20px'
                    }}>
                        <h1>מאלפת!</h1>
                    </article>
                    <br/>
                    <br/>
            </section>                 
        </>
    );
}
