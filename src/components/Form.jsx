import './FormStyle.css';
import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text" required />

            <label>Email</label>
            <input type="email" required />

            <label>Subject</label>
            <input type="text" required/>

            <label>Message</label>
            <textarea name="" placeholder='Type Your Message Here' rows="6" required></textarea>
            
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form