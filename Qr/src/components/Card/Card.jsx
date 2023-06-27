import React from 'react'
import './Card.css'

export const Card = () => {
  return (
    <div className='card'>
      <img className='qr-img' src="../../public/image-qr-code.png" alt="QR code" />
      <h1 className='title'>Improve your frontend skills by building projetcs</h1>
      <p className='text'>Scan the QR code to visit Frontend Mentor and take your coding skills to next level</p>
    </div>
  )
}