import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ErrorMsg from "../common/error-msg";
import { notifySuccess, notifyError } from "@/utils/toast";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required").label("Name"),
  email: Yup.string().required("Email is required").email("Invalid email").label("Email"),
  subject: Yup.string().required("Subject is required").label("Subject"),
  message: Yup.string().required("Message is required").label("Message"),
  remember: Yup.bool()
    .oneOf([true], "You must agree to the terms and conditions to proceed")
    .label("Terms and Conditions"),
});

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      notifySuccess('Message sent successfully!');
      reset();
    } catch (error) {
      notifyError('Failed to submit form');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
      <div className="tp-contact-input-wrapper">
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("name")} name="name" id="name" type="text" placeholder="Zainab Abbasi" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="name">Your Name</label>
          </div>
          <ErrorMsg msg={errors.name?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("email")} name="email" id="email" type="email" placeholder="zeenatinteriors@mail.com" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="email">Your Email</label>
          </div>
          <ErrorMsg msg={errors.email?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <input {...register("subject")} name="subject" id="subject" type="text" placeholder="Write your subject" />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="subject">Subject</label>
          </div>
          <ErrorMsg msg={errors.subject?.message} />
        </div>
        <div className="tp-contact-input-box">
          <div className="tp-contact-input">
            <textarea {...register("message")} id="message" name="message" placeholder="Write your message here..." />
          </div>
          <div className="tp-contact-input-title">
            <label htmlFor="message">Your Message</label>
          </div>
          <ErrorMsg msg={errors.message?.message} />
        </div>
      </div>
      <div className="tp-contact-suggetions mb-20">
        <div className="tp-contact-remeber">
          <input {...register("remember")} name="remember" id="remember" type="checkbox" />
          <label htmlFor="remember">Save my name, email, and website in this browser for the next time I comment.</label>
          <ErrorMsg msg={errors.remember?.message} />
        </div>
      </div>
      <div className="tp-contact-btn">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
