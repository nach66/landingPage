import React from 'react'
import Title from './Title'
import {FaMapMarked, FaEnvelope,FaPhone} from 'react-icons/fa';
import instagram from '../images/icons/instagram.jpg'
import face from '../images/icons/fa.png'

export default function ContactForm() {

    return (
        <>
            <section className="services">
                <Title title="צור קשר"/> 
                <div className="about">

                    <article style={{
                        paddingTop:'4px'
                    }}>
                        <h6>אפשר להשאיר הודעה ונחזור אליכם:</h6>
                        <section className="py-5">
                            <form className="cform" method="POST"
                                action="https://formspree.io/tiberiashostel@gmail.com">
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
                                            placeholder="היי שלום, רציתי לדעת..."
                                        />
                                        </div>
                                        {/* sumbit */}
                                        <input 
                                            type="submit"
                                            value="שלח"
                                            style={{
                                                position: 'relative',
                                                bottom:'25px',
                                                color: 'var(--myblue)',
                                                fontWeight: '500',
                                                background: 'var(--primaryColor)',
                                                padding: '0.3rem 0.8rem',
                                                border: '3px solid var(--primaryColor)',
                                                cursor: 'pointer'
                                            }}
                                        />
                                    </form>
                        </section>
                    </article>

                    
                    <article>
                        <h6>פנו אל פטי וכל הסידורים שלכם יתגשמו לטובה</h6>
                        <h3>כי גם חיות יכולות לעשות כייף חיים!</h3>
                        <a href="tel:04-679-2611">
                                <FaPhone style={{ 
                                    padding: '4px',
                                    fontSize: '1.9rem',
                                    borderRadius: '5px',
                                    backgroundColor: 'var(--mainGrey)',
                                    border: '2px groove var(--offWhite)',
                                    color:'rgb(7, 161, 58)'}}/>
                            </a>
                        <h6>05-555-5555</h6>

                        <a href={"mailto:nach666@gmail.com"} rel="noopener noreferrer" target="_blank">
                                <FaEnvelope style={{ 
                                    padding: '4px',
                                    fontSize: '1.9rem',
                                    borderRadius: '5px',
                                    backgroundColor: 'var(--mainGrey)',
                                    border: '2px groove var(--offWhite)',
                                    color:'#ebe050'}}/>
                            </a>
                        <h6>nach666@gmail.com</h6>

                        <div className="contact-icon">
                            <a rel="noopener noreferrer" target={"_blank"} 
                                href='https://www.facebook.com/tiberiashostel/'>
                                <div style={{backgroundImage: `url(${face})`}}/>   
                            </a>

                            <a rel="noopener noreferrer" target={"_blank"} 
                                href='https://www.instagram.com/tiberiashostel/'>
                                <div style={{backgroundImage: `url(${instagram})`}}/>   
                            </a>
                        </div>
                    </article>

                </div>
            </section>
        </>
    );
}