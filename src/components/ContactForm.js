import React from 'react'
import Title from './Title'

export default function ContactForm() {

    return (
        <>
            <section className="haki-sec">
                <article>
                    <Title title="מעדיפים שאני אחפש אתכם?"/> 
                        <form className="cform" method="POST"
                            action="https://formspree.io/nach666@gmail.com">
                                        {/* first */}
                                        <div className="form-group">
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="form-control"
                                            placeholder="שם"
                                        />
                                        </div>
                                        {/* email */}
                                        <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="אימייל"
                                        />
                                        </div>
                                        {/* phone */}
                                        <div className="form-group">
                                            <input
                                            type="phone"
                                            name="phone"
                                            className="form-control"
                                            placeholder="מספר טלפון"
                                        />
                                        </div>
                                        {/* message */}
                                        <div className="form">
                                        <textarea
                                            name="message"
                                            className="form-control long"
                                            rows="11"
                                            placeholder="נשמעת אחלה, דברי איתי"
                                        />
                                        </div>
                                        {/* sumbit */}
                                        <input 
                                            type="submit"
                                            value="שלחו לי"
                                            style={{
                                                color: 'var(--primaryColor)',
                                                background: 'var(--mainRed)',
                                                border: '3px solid var(--mainRed)',
                                                borderRadius: '10%',
                                                fontWeight: 'bold',
                                                padding: '0.2rem',
                                                marginTop: '20px',
                                                width: '30%',
                                                cursor: 'pointer'
                                            }}
                                        />
                        </form>
                </article>
            </section>
        </>
    );
}