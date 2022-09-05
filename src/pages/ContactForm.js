import React, { useRef, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [alert, setAlert] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ogmail',
        'template_tshnt5r',
        form.current,
        'user_LV8tGjvKulV2Fc9ZwlsZ6'
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, [alert]);

  return (
    <main className='contact'>
      <div className='form-body'>
        {alert && <p className='alert'>Your message was sent!</p>}
        <form ref={form} onSubmit={sendEmail}>
          <label>Name: </label>
          <input type='text' name='user_name' />
          <br />
          <label>Email: </label>
          <input type='email' name='user_email' />
          <br />
          <textarea name='message' placeholder='Message' />
          <br />
          <input type='submit' value='Send' />
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default ContactForm;
