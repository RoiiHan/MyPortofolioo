import React from 'react'
import './style/FloatingWa.css'

function FloatingWA() {
  const nomorWA = '6289633698200'
  const pesan = 'Halo Roihan, saya ingin menghubungi kamu!'

  const linkWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`

  return (
    <a
      href={linkWA}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label="Chat WhatsApp"
      >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  )
}

export default FloatingWA