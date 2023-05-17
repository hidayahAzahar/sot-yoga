import React from 'react';
import {useState} from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './Configuration';
Amplify.configure(awsExports);

const Header = () => {
    const [show,setShow] = useState(false);
    const [modal, setModal] = useState(false);
    
    const toggleModal = () => {
        setModal(!modal);
      };
    
    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    };

    const formFields = {
      signUp: {
        email: {
          order:1
        },
        password: {
          order: 2
        },
        confirm_password: {
          order: 3
        },
        phone_number: {
          dialCode: '+227'
        }
      }
     }
    
    return (
    <header className="header" id="home">
    <nav className="nav container">
      <a href="" className="nav-logo-header">Urban Spring Yoga</a>

      <div className={`nav-menu ${show ? 'show-menu' : ''}`} id="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={() =>setShow(!show)}>
                Home 
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() =>setShow(!show)}>
                About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#classes" className="nav-link" onClick={() =>setShow(!show)}>
                Classes
            </a>
          </li>
          <li className="nav-item">
            <a href="#pricing" className="nav-link" onClick={() =>setShow(!show)}>
                Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#instructors" className="nav-link" onClick={() =>setShow(!show)}>
                Instructors
            </a>
          </li>
          <div className="nav-close" id="nav-close" onClick={() =>setShow(!show)}>
            <i className="ri-close-line nav-close"></i>
          </div>
        </ul>

        <div className="nav-button" onClick={toggleModal}>
            Sign Up
        </div>

        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <Authenticator formFields={formFields}>
              {({ signOut }) => <button onClick={signOut}>Sign Out</button>}
          </Authenticator>
          </div>
        </div>
      )}

      </div>

      <div className="nav-toggle" onClick={() =>setShow(!show)}>
      </div>
    </nav>
  </header>
    );
};

export default Header;