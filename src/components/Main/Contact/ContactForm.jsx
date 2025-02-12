import "./ContactForm.css";

import Button from "../../common/Button/Button";

import { useState } from "react";

const ContactForm = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  // const serviceId = import.meta.env.VITE_MAIL_SERVICE_ID;
  // const templateId = import.meta.env.VITE_MAIL_TEMPLATE_ID;
  // const publicKey = import.meta.env.VITE_MAIL_PUBLIC_KEY;

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   //TODO: Notify user if mail was sent or not
  //   //TODO: Input fields cannot be left blank
  //   emailjs
  //     .sendForm(serviceId, templateId, form.current, {
  //       publicKey: publicKey,
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //         setSenderName("");
  //         setSenderEmail("");
  //         setSenderMessage("");
  //         form.current.reset();
  //       },
  //       (error) => {
  //         console.log("ERROR", error.text);
  //       }
  //     );
  // };

  return (
    <div className="contact-form-container">
      <h2>Contact me</h2>
      <section>
        <form className="form-container" /* ref={form} */>
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
          {/* <button type="submit" onClick={sendEmail}>
            Send
          </button> */}
        </form>
      </section>

      <div className="form-button-container">
        <Button text={"Send"} />
      </div>
    </div>
  );
};

export default ContactForm;
