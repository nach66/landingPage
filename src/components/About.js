import React from 'react'
import {FaEnvelope,FaPhone} from 'react-icons/fa';
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
                    <br/>
                    <h5>פנו אל פטי וכל הסידורים שלכם יתגשמו לטובה</h5>
                    <br/>

                    <article style={{
                        display:'inline-block',
                        marginLeft: '20px'
                    }}>

                    <a href="tel:055-555-5555">
                        <FaPhone className="contact-icon"/>
                        <h6>055-555-5555</h6>
                    </a>
                    </article>

                    <article style={{
                        display:'inline-block',
                        marginRight: '20px'
                    }}>
                    <a href={"mailto:nach666@gmail.com"} rel="noopener noreferrer" target="_blank">
                        <FaEnvelope 
                            className="contact-icon"
                            style={{color:'var(--primaryColor)'}}/>
                        <h6>nach666@gmail.com</h6>
                    </a>
                    </article>

                    <br/>
                    <br/>
                    <h3>כי גם חיות יכולות לעשות כייף חיים!</h3>            
                </article>
            </div>
        </>
    )
}
