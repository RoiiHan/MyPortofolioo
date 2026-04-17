import React from 'react'
import './style/Contact.css'

function ComponentContact() {
  return (
    <div>
        <section className="container-contact">
         <div className="container-info">
            <div className="container-data">
                <div><i className="fa-solid fa-envelope"></i>  roihanntauhidd@gmail.com</div>
                <div><i className="fa-solid fa-phone"></i>  +6289633698200</div>
                <div><i className="fa-solid fa-location-dot"></i>  Padang, Indonesia</div>
                <div><i className="fa-solid fa-clock"></i>  Available mon-fri , 9AM - 6PM</div>
            </div>
            <div className="container-link">
                    <li><a href="https://www.linkedin.com/in/roihantauhid/"><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/roihan_thd/"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://github.com/RoiiHan"><i className="fa-brands fa-github"></i></a></li>
            </div>
        </div>  
        <div className="container-form">    
            <h3>Contact Us</h3>
            <div className="form">
                <form action="">
                    <input type="text" placeholder="YourName" />
                    <input type="text" placeholder="YourEmail" />
                    <textarea name="" id="" placeholder="YourMessage"></textarea>
                    <button>Send Message</button>
                </form>
            </div>
        </div>
     </section>
    </div>
  )
}

export default ComponentContact