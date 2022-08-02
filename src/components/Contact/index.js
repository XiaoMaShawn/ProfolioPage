import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ozrzm93',
        'contact_form',
        refForm.current,
        'Kk-puJMDomfhXFrSs'
      )
      .then(
        function() {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        function(error) {
          alert('Fail to send the message, please try again');
          console.log('Error', error);
        }
      )
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm interested in web developer opportunities - especially entry/junior level. However, if you have other request or questions, don't hesitate to contact me using below from either.
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='text' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input type='text' name='subject' placeholder='Subject' required />
                </li>
                <li>
                  <textarea name='message' placeholder='Message' required />
                </li>
                <li>
                  <input className='flat-button' type='submit' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
};

export default Contact;