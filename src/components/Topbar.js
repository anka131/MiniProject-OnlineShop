import React from 'react'

const Topbar = () => {
  return (
    <section className='topbar'>
        <h1>
            <a href="index.html" className=' text-decoration-none'>
            <i className="bi bi-shop text-danger-emphasis ">Online Shop</i>
            </a>
        </h1>
        <hr className='border-3 text-danger-emphasis'/>
    </section>
  )
}

export default Topbar