import React from 'react';

const ContactForm = () => {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="emailField">Email</label>
                    <input type="email" id="emailField" className="form-control" placeholder="Enter email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="subjectField">Subject</label>
                    <input type="text" id="subjectField" className="form-control" placeholder="Enter subject" aria-describedby="subjectHelp" />
                </div>
                <div className="form-group">
                    <label for="messageField">Message</label>
                    <textarea id="messageField" className="form-control" cols="40" rows="5" placeholder="Enter message" aria-describedby="messageHelp" />
                </div>
                <button type="submit" className="btn btn-outline-warning">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;
