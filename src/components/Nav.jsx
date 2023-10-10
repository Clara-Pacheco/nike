import { useState } from 'react'
import { headerLogo } from '../assets/images'
import { Button } from '../components/Button'

export const Nav = () => {
  let Links = [
    {
     name: "HOME",
     link: "/"
    },
    {
     name: "ABOUT US",
     link: "/aboutus"
    },
    {
     name: "PRODUCTS",
     link: "/products"
    },
    {
     name: "CONTACT US",
     link: "/contactus"
    }
  ]
  const [open, setOpen] = useState(false)
  console.log(open)
  return (
   <header className=' w-full fixed top-0 left-0'>
    <nav className= 'max-lg:bg-slate-100 max-lg:shadow-lg max-xl:h-[600px] flex max-lg:flex-col justify-center gap-16 bg-white py-4  md:px-10 px-7'>
      <a href="/">
        <img 
          className=' absolute max-lg:left-8 lg:mt-5 max-lg:mt-[-260px] lg:ml-[-6.25rem]'
          src={headerLogo}
          alt="Nike check symbol logo"
          width={130}
          height={29}
        />
      </a>

      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-10 cursor-pointer lg:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
      </div>

      <ul className="absolute max-lg:hidden lg:flex w-full max-lg:flex-col justify-around gap-16 lg:mt-[6rem]">
        {Links.map((link)=>{
          return(
            <li key={link.name} className='max-lg:m-5 max-lg:mb-10'>
              <a href={link.link}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-400 duration-500'>
                  {link.name}
              </a>
            </li>
           
          )
        })}
        <Button>
          SIGN IN/EXPLORE
        </Button>
      </ul> 
      {open && (
        <ul className="absolute max-lg:flex lg:hidden max-lg:flex-col justify-around gap-2 lg:mt-[6rem]">
        {Links.map((link)=>{
          return(
            <li key={link.name} className='max-lg:m-5 max-lg:mb-10'>
              <a href={link.link}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-400 duration-500'>
                  {link.name}
              </a>
            </li>
           
          )
        })}
        <Button >
          SIGN IN/EXPLORE
        </Button>
      </ul> 
    
   )}
      
    </nav>
  

   </header>
  
  )
}


