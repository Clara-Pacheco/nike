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
  return (
   <header className='shadow-md w-full fixed top-0 left-0'>
    <nav className= 'flex max-lg:flex-col items-center justify-center gap-16 bg-white py-4 md:px-10 px-7'>
      <a href="/">
        <img
          src={headerLogo}
          alt="Nike check symbol logo"
          width={130}
          height={29}
        />
      </a>
      <ul className='flex max-lg:flex-col justify-center items-center gap-16 max-lg:mt-3'>
        {Links.map((link)=>{
          return(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 ml-7'>
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
    </nav>
   </header>
  )
}


