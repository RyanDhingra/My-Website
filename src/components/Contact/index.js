import {useRef} from "react";
import "./index.css"
import Video from "../Video";
import emailjs from 'emailjs-com'
import Form from './Form/index.js'


export default function Contact() {
    const form = useRef();

    function sendEmail(e) {
        
            e.preventDefault();
            console.log(form.current)
            emailjs.sendForm('service_7mbo6s6', 'template_yu66za6', form.current, process.env.REACT_APP_CHEC_PUBLIC_KEY_EMAILJS)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            alert("Your message has been sent successfully!");
    };

    return (
        <div className="contact-page">
            <Video/>
            <div className="socials">
                <a href="https://www.linkedin.com/in/ryan-dhingra-82969822b/" target="_blank" rel="noreferrer">
                    <img className="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="Linkedin"/>
                </a>
                <a href="https://github.com/RyanDhingra" target="_blank" rel="noreferrer">
                    <img className="github" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github"/>
                </a>
            </div>
            <div className="form-container">
                <Form/>
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <label>Name:</label>
                    <input className="name-input" type="text" name="user_name" placeholder="Enter your name here..." required='true' />
                    <label>Email:</label>
                    <input className="email-input" type="email" name="user_email" placeholder="Enter your email here..." required='true' />
                    <label>Message:</label>
                    <textarea className="message-input" name="message" placeholder="Enter your message here..." required='true' />
                    <input className="send-button" type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}