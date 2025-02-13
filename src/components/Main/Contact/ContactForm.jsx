import "./ContactForm.css";

import Button from "../../common/Button/Button";

import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

const ContactForm = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [messageSent, setMessageSent] = useState(null);

  const serviceId = import.meta.env.VITE_MAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_MAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_MAIL_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSenderName("");
          setSenderEmail("");
          setSenderMessage("");
          form.current.reset();
          setMessageSent(true);
        },
        (error) => {
          console.log("ERROR", error.text);
          setMessageSent(false);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <h2 id="target-3" className="nav-active">
        Contact me
      </h2>
      <section>
        <form className="form-container" ref={form}>
          <input
            className="input-field"
            required
            type="text"
            name="user_name"
            placeholder="Your name"
            onChange={(event) => setSenderName(event.target.value)}
          />
          <input
            className="input-field"
            required
            type="email"
            name="user_email"
            placeholder="Your email address"
            onChange={(event) => setSenderEmail(event.target.value)}
          />
          <textarea
            className="input-field input-field--message"
            required
            type="text"
            name="message"
            placeholder="Your message to Johan"
            onChange={(event) => setSenderMessage(event.target.value)}
          />
          <div className="form-button-container">
            <Button text={"Send"} handleClick={sendEmail} />
          </div>
          <div>
            {messageSent !== null &&
              (messageSent ? (
                <p>Thank you for your message. I'll get back to you ASAP!</p>
              ) : (
                <p>Something went wrong! Email me instead.</p>
              ))}
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
