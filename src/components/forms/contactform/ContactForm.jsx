import React from 'react'
import './ContactForm.css'
import Button from '../../shared/button/Button'
import { FaCashRegister } from "react-icons/fa6";
export const ContactForm = () => {
  return (
    <>
    <h1>Contact Form</h1>
    <div className="contact-form">
        <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name.." required />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email.." required />

            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Write something.." rows="4" required></textarea>

            {/* <button type="submit">Submit</button> */}
            <Button  mytext="SUBMIT REQUEST" myicon={<FaCashRegister/>}/>
        </form>
    </div>
    </>
  )
}

//export default ContactForm