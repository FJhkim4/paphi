import React from 'react';

const ContactForm = () => {
    return (
        <div className="container form">
            <input type="text" className="form-control" placeholder="Subject:" />
            <textarea className="form-control" name="message" cols="40" rows="5" placeholder="Enter Message:" ></textarea>
            <button type="submit" class="btn btn-outline-warning">Submit</button>
        </div>
    );
}

export default ContactForm;