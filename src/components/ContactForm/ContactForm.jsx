import React from "react";
import Styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  // const onSubmit = (event) => {
  //   event.preventDefault();

  //   setName(event.target[0].value);
  //   setEmail(event.target[1].value);
  //   setText(event.target[2].value);
  // };

  // EmailJS Start
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);

    emailjs
      .sendForm(
        "service_sd6fay9",
        "template_9qxisl5",
        form.current,
        "iq8_xlzWnEGy_xVkc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // EmailJS End

  return (
    <section className={Styles.container}>
      <section className={Styles.contact_form}>
        <div className={Styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize={"24px"} />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize={"24px"} />} />
        </div>
        <Button
          isOutLine={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize={"24px"} />}
        />
        {/* <form ref={form} onSubmit={sendEmail}>
          <div className={Styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="user_name" />
          </div>
          <div className={Styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" />
          </div>
          <div className={Styles.form_control}>
            <label htmlFor="text">Message</label>
            <textarea name="text" rows={8} />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <input type="submit" value="Send" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form> */}
        <form ref={form} onSubmit={sendEmail}>
          <div className={Styles.form_control}>
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>

          <div className={Styles.form_control}>
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div className={Styles.form_control}>
            <label>Message</label>
            <textarea name="message" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <input type="submit" value="Send" />
          </div>
        </form>
      </section>
      <section className={Styles.contact_Img}>
        <img src="/images/contact.svg" alt="Contact Image" />
      </section>
    </section>
  );
};

export default ContactForm;
