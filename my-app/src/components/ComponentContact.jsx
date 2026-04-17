import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './style/Contact.css'

function ComponentContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState('') // 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')

    emailjs.send(
      'service_p80isya',   // Ganti dengan Service ID kamu
      'template_o88bcmo',  // Ganti dengan Template ID kamu
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'r6cEXhx5Af_FwDdlP'    // Ganti dengan Public Key kamu
    )
    .then(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' }) // Reset form
    })
    .catch(() => {
      setStatus('error')
    })
  }

  return (
    <div>
      <section className="container-contact">
        <div className="container-info">
          <div className="container-data">
            <div><i className="fa-solid fa-envelope"></i> roihanntauhidd@gmail.com</div>
            <div><i className="fa-solid fa-phone"></i> +6289633698200</div>
            <div><i className="fa-solid fa-location-dot"></i> Padang, Indonesia</div>
            <div><i className="fa-solid fa-clock"></i> Available mon-fri , 9AM - 6PM</div>
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Notifikasi status */}
              {status === 'success' && (
                <p className="status-success">✅ Pesan berhasil dikirim!</p>
              )}
              {status === 'error' && (
                <p className="status-error">❌ Gagal mengirim, coba lagi.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComponentContact