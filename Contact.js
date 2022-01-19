import React from 'react';
import './App.css';



const handleSubmit = (event_)=>
{
  alert('Your response was submitted. Thank you! ');
  event_.preventDefault();
}

function Contact() {
  return (
    <div>
        <h1 className='heading'>Contact Us</h1>
        <form id='contact-form'>
          <br/>
          <label id='fname'>First Name:  
          <br/>
          <input type='text' classname='input'/>
          </label>
          <br/>
          <br/>
          <label id='lname'>Last Name: 
          <br/>
          <input type='text' />
          </label>
          <br/>
          <br/>
          <label id='email'>Email-id: 
          <br/>
          <input type='email' placeholder='name@example.com'/>
          </label>
          <br/>
          <br/>
          <label id='msg'>Your message: 
          <br/>
          <textarea type='text'/>
          </label>
          <br/>
          <br/>
          <label>
          <button type='submit' id='submit' onClick={handleSubmit}>Submit</button>
          </label>

        </form>
        <br/>
        <p className='thank'>We shall get back to you. </p>
    </div>

  );
}

export default Contact;
/*
<form id="contact">
        <input type='text'id='fname'>First Name</input>
        <input type='text' id='lname'>Last Name</input>
        <input type='email' id='email'>Email-id</input>
        <input type='text' id='msg'>Message</input>
        <input type='submit' id='submit'>Submit</input>
        </form>
*/