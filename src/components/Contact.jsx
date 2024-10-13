import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h2>Contact Us</h2>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' required placeholder='Enter your name'/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' required placeholder='Enter  your email'/>
                </div>
                <div>
                    <label htmlFor="number">Phone number</label>
                    <input type="tel" id='number' required placeholder='Enter your phone number'/>
                </div>
                <div>
                    <label htmlFor="message">Massage</label>
                    <input type="text" id='message' required placeholder='Message...'/>
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact