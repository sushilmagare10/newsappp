import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className='flex justify-center p-4'>
        <p>Copyright ⓒ {year} </p>
    </div>
  )
}

export default Footer