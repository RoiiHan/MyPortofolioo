import React from 'react'
import { Link } from 'react-router'
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import FloatingWA from '../components/FloatingWA';

function Beranda() {
  return (
    <div>
      <Navbar />
      <Container />
      <FloatingWA />
     </div>
  )
}

export default Beranda