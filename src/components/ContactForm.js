import React from 'react'
import {FaPaw} from 'react-icons/fa';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }
    
    render() {
        const { status } = this.state;
        return (
            <>
                <section className="contact-sec">
                    <article>
                        <h1>מעדיפים שאני אחפש אתכם?</h1>
                        <FaPaw style={{
                            margin: '2px',
                            fontSize: '20px',
                            color: 'var(--lightblue)'
                        }}/>
                        <FaPaw style={{
                            margin: '2px',
                            fontSize: '20px',
                            color: 'var(--secblue)'
                        }}/>
                        <FaPaw style={{
                            margin: '2px',
                            fontSize: '20px',
                            color: 'var(--blue)'
                        }}/>
                        
                        <form className="cform" method="POST"
                            onSubmit={this.submitForm}
                            action="https://formspree.io/f/xyybdwwn">
                                <input
                                    type="text"
                                                name="Name"
                                                className="form-control"
                                                placeholder="שם"/>
                                <input
                                    type="phone"
                                                name="phone"
                                                className="form-control"
                                                placeholder="מספר טלפון"/>
                                <textarea
                                    name="message"
                                                className="form-control long"
                                                rows="11"
                                                placeholder="נשמעת אחלה, דברי איתי"/>
                                {status === "SUCCESS" ? <p>תודה!</p> : <button type="submit" className="submit">שלחו לי</button>}
                                {status === "ERROR" && <p>אוי! קרתה תקלה, אנא נסו שוב.</p>}                            
                        </form>
                    </article>
                </section>
            </>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}
