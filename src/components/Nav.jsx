import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'

export const Nav = () => {
  return (
   <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
      <a href="/">
        <img
          src={headerLogo}
          alt="Nike check symbol logo"
          width={130}
          height={29}
        />
      </a>
      <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        <li>
          <a href="/"
            className='font-montserrat leading-normal text-lg text-slate-gray'>
              Home
          </a>
        </li>
        <li>
          <a href="/"
            className='font-montserrat leading-normal text-lg text-slate-gray'>
              About Us
          </a>
        </li>
        <li>
          <a href="/"
            className='font-montserrat leading-normal text-lg text-slate-gray'>
              Products
          </a>
        </li>
        <li>
          <a href="/"
            className='font-montserrat leading-normal text-lg text-slate-gray'>
            Contact Us
          </a>
        </li>
        <li>
          <a href="/"
            className='font-montserrat leading-normal text-lg text-slate-gray'>
            Sign in /Explore Now 
          </a>
        </li>
      </ul>
      <div className='hidden max-lg:block'>
        <a href="/">
          <img
            src={hamburger}
            alt="Nike check symbol logo"
            width={25}
            height={25}
          />
        </a>
      </div>
    </nav>
   </header>
  )
}


