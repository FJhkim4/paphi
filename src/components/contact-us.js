import React from 'react';
import SocialLinks from './social_links';
import ContactForm from './contact_form';

const ContactUs = () => {
    return (
        <div className="container">
            <h2>Contact Us</h2>
            <ContactForm />
            <SocialLinks />
        </div>
    );
}

export default ContactUs;