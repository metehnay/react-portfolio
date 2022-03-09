import React, { useState } from "react";
import "../assets/css/Contact.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mzborbbn");
  if (state.succeeded) {
    return (
      <p className="good">
        Thanks! I will get back to you within one to two days.
      </p>
    );
  }
  return (
    <>
      <div className="contact-container">
        <h2>Contact</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} id="formzo">
          <h1 className="talk">Let's Talk!</h1>
          <div className="firstform">
            <input id="name" type="name" name="name" placeholder="Name" />
            <input id="email" type="email" name="email" placeholder="Email" />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <input id="text" type="text" name="text" placeholder="Subject" />

          <textarea id="message" name="message" placeholder="Message..." />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} id="btn">
            Submit
          </button>
        </form>
      </div>
      {state.submitting && <h2 className="send">Sending...</h2>}
    </>
  );
}

export default Contact;
