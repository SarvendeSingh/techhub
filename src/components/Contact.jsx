import React, { useState } from 'react'

const Contact = () => {

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
   });
    const [errors, setErrors] = useState({
        nameerrror: "",
        emailerror: "",
        phoneerror: ""
    });

   const handleChange = (event) => {
    event.preventDefault();
    setFormData(prev => ({...prev, [event.target.name]: event.target.value }))
    
   }

   

   const handleForm = (event) => {
    event.preventDefault();

    let nameerrror = "";
   let emailerror = "";
   let phoneerror = "";
    
    if (formData.name === "") {
        nameerrror = 'Please enter your name';  
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email === "" || !emailPattern.test(formData.email)) {
        emailerror = 'Please enter a valid email';     
    }
    if (formData.phone === "" || formData.phone.length !== 10){
        phoneerror = 'Please enter a valid 10-digit phone number';       
    }

    setErrors({nameerrror, emailerror,phoneerror});

    if (!nameerrror && !emailerror && !phoneerror) {
        console.log(formData);        
    }

   }

   

  return (
    <div className='contact'>
        <main>
            <h2>Contact Us</h2>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="name">Name</label>
                    <div>
                    <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Enter your name'/>
                    
                    {errors.nameerrror && <span className='error'>{errors.nameerrror}</span>}

                    </div>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <div>
                    <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter  your email'/>
                   
                    {errors.emailerror && <span className='error'>{errors.emailerror}</span>}

                    </div>
                </div>
                <div>
                    <label htmlFor="number">Phone number</label>
                    <div>
                    <input type="tel" id='number' name='phone' maxLength="10" minLength="10" value={formData.phone} onChange={handleChange}  placeholder='Enter your phone number'/>
                    
                    {errors.phoneerror && <span className='error'>{errors.phoneerror}</span>}
                    </div>
                </div>
                <div>
                    <label htmlFor="message">Massage</label>
                    <div>
                    <input type="text" id='message' name='message' value={formData.message} onChange={handleChange}  placeholder='Message...'/>
                    </div>
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact