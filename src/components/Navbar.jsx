import {useState} from 'react'
import {close, logo, menu} from "../assets"
import {navLinks} from "../constants"


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className='flex items-center justify-between w-full py-6 navbar'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]'/>
      {/* desktop navbar */}
      <ul className='items-center justify-end flex-1 hidden list-none sm:flex' >
        {navLinks.map((nav, index)=> 
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary ${index === navLinks.length - 1 ? "mr-0": "mr-10"}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
         )}
      </ul>
      
      {/* mobile navbar */}
      <div className='flex items-center justify-end flex-1 sm:hidden'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 left-0 mx-auto justify-center my-2 w-[90%] rounded sidebar`}>
        <ul className='flex flex-col items-center justify-center list-none' >
          {navLinks.map((nav, index)=> 
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-secondary ${index === navLinks.length - 1 ? "mr-0": 'mb-4'}`} onClick={() => setToggle((prev) => !prev)}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          )}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 