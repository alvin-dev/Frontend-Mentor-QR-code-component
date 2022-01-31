import React from "react";
import './style.css'
import ImgQrCode from './images/image-qr-code.png'

 const qrCodeComponent = () => {
  return (
    <>

        
        <div className="card-qrcode">

          <img src={ImgQrCode} alt="QR Code"></img>

          <div className="info">
            <h1>Improve your front-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>

        </div>
      
    </>
  )
}

export default qrCodeComponent