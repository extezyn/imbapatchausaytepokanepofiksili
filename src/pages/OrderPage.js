import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/Pages/orderPage.css';

const OrderPage = () => {
  const form = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isVerified, setIsVerified] = useState(false);

  const sendEmail = () => {
    emailjs
      .sendForm('service_b8plfew', 'template_bkogvsj', form.current, 'T4g0oDqEoNTloItz7')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const onSubmit = (data) => {
    if (isVerified) {
      sendEmail();
    } else {
      alert('Please verify the reCAPTCHA.');
    }
  };

  const onRecaptchaChange = (value) => {
    setIsVerified(!!value);
  };
  
  return (
    <div className="order-page">
      <script src="https://www.google.com/recaptcha/api.js"></script>

      <form id="idform" ref={form} onSubmit={handleSubmit(onSubmit)}>
        <input {...register("fullName", { required: true })} placeholder="Full Name"/>
        {errors.fullName && <h5>Full name required</h5>}

        <input {...register("address", { required: true })} placeholder="Email"/>
        {errors.address && <h5>Email required</h5>}

        <select {...register("paymentMethod", { required: true })}>
          <option value="">Choose a payment method</option>
          <option value="creditCard">Credit card</option>
          <option value="paypal">PayPal</option>
          <option value="cash">Cash</option>
        </select>
        {errors.paymentMethod && <h5>Choice of payment method is required</h5>}

          <ReCAPTCHA
            sitekey="6Ld4UvgpAAAAAM2vB7jnfVX_pu08ACOSokBww7Hs"
            onChange={onRecaptchaChange}
          />
        <button type="submit" disabled={!isVerified}>Order</button>
      </form>
    </div>
  );
};

export default OrderPage;
