import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import '../styles/components/contactForm.css';

const ContactForm = () => {
  const form = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p72pjn5', 'template_be5ko7q', form.current, 'sXB1aiZI9BgEDZcBk')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit(sendEmail)} className="contact-form">
      <input {...register("name", { required: true })} placeholder="Name" />
      {errors.name && <h5>Name is required</h5>}

      <input {...register("email", { required: true })} placeholder="Email" />
      {errors.email && <h5>Email is required</h5>}

      <textarea {...register("message", { required: true })} placeholder="Message"></textarea>
      {errors.message && <h5>Message is required</h5>}

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
