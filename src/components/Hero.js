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

            <section className="blue-sec">
                <br/>
                <h2>או אולי אתם...</h2>
                <br/>
                <h4>בין אם אתם טסים לחופשה חלומית, או דווקא כדי לבקר קרוב משפחה שאתם בקושי סובלים - </h4>
                <br/>
                <h1>מעכשיו גם לחיית המחמד שלכם</h1>
                <article style={{display:'inline-block'}}>
                    <h1>מגיעה חוויה מאלפת</h1>
                </article>
                <article style={{display:'inline-block', margin: '10px'}}>
                    <h6>(כן, כן...)</h6>
                </article>
                <article style={{display:'inline-block'}}>
                    <h2>!</h2>
                </article>
            </section>                 
        </>
    );
}
