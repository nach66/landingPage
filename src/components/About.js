import React from 'react'
import Title from '../components/Title';
import {FaMapMarked, FaEnvelope,FaPhone} from 'react-icons/fa';

export default function About() {
    return (
        <>
            <div className="about">
    
                <article className="haki-sec" style={{  textAlign: 'right'}}>
                    <h4>
                        נעים מאוד, פטי.
                    </h4>
                    <ul>
                        <li>פטסיטרית אחראית ומנוסה</li>
                        <li>שומרת על היצורים האהובים עליכם במצבם הטבעי, ואף משפרת.</li>
                        <li>מוציאה לטיולים ומאכילה בממתקים את כל הצדדים הרלוונטיים.</li>
                        <li>לוחשת לכלבים וגם צועקת כשצריך</li>
                        <li>מדברת לחשננית כך שיכולה להסתדר גם עם חתולים.</li>
                        <li>אין ציפור או דג שלא ירגישו בטוחים בקרבתי גם כן, כמובן בקופסא המתאימה.</li>
                    </ul>
            </article>

                <article className="sec">
                        <h5>פנו אל פטי וכל הסידורים שלכם יתגשמו לטובה</h5>
                        <h3>כי גם חיות יכולות לעשות כייף חיים!</h3>
                        <br/>
                        <article style={{display: 'inline-block', marginLeft:'30px'}}>
                            <a href="tel:05-555-5555">
                                    <FaPhone style={{ 
                                        marginTop: '3px',
                                        padding: '4px',
                                        fontSize: '1rem',
                                        borderRadius: '5px',
                                        backgroundColor: 'var(--mainRed)',
                                        border: '1px groove var(--lightblue)',
                                        color:'rgb(7, 161, 58)'}}/>
                            </a>
                            <h6>05-555-5555</h6>
                        </article>
                        <article style={{display: 'inline-block', marginRight:'20px'}}>
                            <a href={"mailto:nach666@gmail.com"} rel="noopener noreferrer" target="_blank">
                                    <FaEnvelope style={{ 
                                        padding: '4px',
                                        fontSize: '1rem',
                                        borderRadius: '5px',
                                        backgroundColor: 'var(--mainRed)',
                                        border: '1px groove var(--lightblue)',
                                        color:'#ebe050'}}/>
                                </a>
                            <h6>nach666@gmail.com</h6>
                        </article>
            </article>
    
            </div>

        </>
    )
}
