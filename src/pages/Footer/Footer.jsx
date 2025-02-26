import React from 'react'
import Logo from '../Logo.jsx'

function Footer() {
  return (
    <>
    <div className="footer pt-[79px]">
      <div className="container py-[114px]  bg-black rounded-[20px]">
        <div className="grid grid-cols-12">
          <div className="col-span-4 mx-auto">
            <Logo/>
          </div>
          <div className="col-span-4 mx-auto">
            wolrd
          </div>
          <div className="col-span-4 mx-auto">
            go
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Footer