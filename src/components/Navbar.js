import React from 'react'
import categories from '../data/categories'
import HamBurgerMenu from "./HamBurgerMenu"
import logo from "./images/logo.png"

const Navbar = ({setCategory}) => {
  return (
    <>
    <div className='flex w-screen h-[90] z-10 bg-white fixed drop-shadow-lg justify-between items-center lg:visible  ' >
    <div className='h-50 w-60 px-4'>
         <img src={logo} alt="logo" />
         </div>
    <ul className='flex justify-between text-lg capitalize  '>
    {categories.map((text,index)=>( 
    <li key={index} className="mr-6 cursor-default" onClick= {()=> setCategory(text)}>
      <a key={index} 
      className="text-blue-500 hover:text-blue-800"  >{text}</a>
  </li>

    
    ))}
    </ul>
    </div>
    <div className='flex w-screen h-[90] z-10 bg-white fixed drop-shadow-lg justify-between items-center lg:hidden '>
         <HamBurgerMenu
            setCategory={setCategory}
         />
         <div className='h-50 w-60 px-4'>
         <img src={logo} alt="logo" />
         </div>
         
    </div>
    </>
  )
}

export default Navbar