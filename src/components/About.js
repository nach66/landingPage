import React from 'react'
import {FaPaw, FaShoePrints, FaEnvelope,FaPhone} from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp, faThumbsDown} from "@fortawesome/free-solid-svg-icons";
export default function About() {
    return (
        <>
            <div className="about">
    
                <article className="haki-sec" style={{  textAlign: 'right'}}>
                    <h3>נעים מאוד, פטי.</h3>
                    <h5><FontAwesomeIcon icon={faThumbsUp} /> פטסיטרית אחראית ומנוסה.</h5>
                    <h5><FontAwesomeIcon icon={faThumbsUp} /> שומרת על היצורים האהובים עליכם במצבם הטבעי, ואף משפרת.</h5>
                    <h5><FontAwesomeIcon icon={faThumbsUp} /> מוציאה לטיולים ומאכילה בממתקים את כל הצדדים הרלוונטיים.</h5>
                    <h5><FontAwesomeIcon icon={faThumbsUp} /> לוחשת לכלבים וגם צועקת כשצריך.</h5>
                    <h5><FontAwesomeIcon icon={faThumbsDown} /> מדברת לחשננית כך שיכולה להסתדר גם עם חתולים.</h5>
                    <h5><FontAwesomeIcon icon={faThumbsUp} /> אין ציפור או דג שלא ירגישו בטוחים בקרבתי גם כן, כמובן בקופסא המתאימה.</h5>
            </article>

                <article className="blue-sec">                
                    <h5>פנו אל פטי וכל הסידורים שלכם יתגשמו לטובה</h5>
                        <a href="tel:055-555-5555">
                                <FaPhone className="contact-icon"/>
                                <a style={{
                                    color: 'var(--myblue)',
                                    fontSize:'25px'
                                }}>055-555-5555</a>
                            </a>
                        <br/>
                        <a href={"mailto:nach666@gmail.com"} rel="noopener noreferrer" target="_blank">
                            <FaEnvelope 
                                className="contact-icon"
                                style={{color:'var(--primaryColor)'}}/>
                            <a style={{
                                color: 'var(--myblue)',
                                fontSize:'25px'
                            }}>nach666@gmail.com</a>
                        </a>
                    <br/>
                    <br/>
                    <br/>
                    <h3>כי גם חיות יכולות לעשות כייף חיים!</h3>   
                </article>

            </div>
        </>
    )
}
