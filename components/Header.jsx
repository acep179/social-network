import { AiOutlineSearch } from 'react-icons/ai'
import { BiSolidUpArrowAlt } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiUploadFill } from 'react-icons/ri'

function Header() {

  const navMenu = [
    {
      title: 'Videos',
      link: '#videos'
    },
    {
      title: 'People',
      link: '#people'
    },
    {
      title: 'Documents',
      link: '#documents'
    },
    {
      title: 'Events',
      link: '#events'
    },
    {
      title: 'Communities',
      link: '#communities'
    },
    {
      title: 'Favorites',
      link: '#favorites'
    },
    {
      title: 'Channels',
      link: '#channels'
    },
  ]

  return (
    <div className="py-7 md:px-0 px-5 grid grid-cols-12 md:gap-x-6 gap-y-3 items-center">

      <div className='lg:col-span-3 md:col-span-4 col-span-8 md:order-1 order-2 md:block flex justify-center'>
        <h1 className='font-roboto sm:text-4xl text-3xl font-thin'> <strong>Social</strong>Network</h1>
      </div>

      <div className='lg:col-span-5 md:col-span-4 col-span-12 md:order-2 order-5 bg-sec'>
        <form className='flex h-full items-center'>
          <input className='w-full h-10 px-3 bg-inherit text-tri placeholder:text-tri' type="text" placeholder="Find..." />
          <span className='h-full px-3 aspect-square flex justify-center items-center hover:cursor-pointer'>
            <AiOutlineSearch className=' text-tri text-xl'/>
          </span>
        </form>
      </div>

      <div className='md:col-span-2 order-3 md:bg-sec'>
        <button className='w-full md:h-11 flex items-center justify-center text-tri'>
          <RiUploadFill className='h-10 w-10 md:hidden block text-sec'/>
          <BiSolidUpArrowAlt className='md:block hidden text-xl'/>
          <p className='md:block hidden'>Upload</p>
        </button>
      </div>

      <div className='md:col-span-2 col-start-12 order-4 flex items-center'>
        <BsFillPersonFill className='h-10 w-10 text-sec md:hidden block'/>
        <span className='items-center justify-center h-11 mr-2 aspect-square bg-sec md:flex hidden'>
          <BsFillPersonFill className='text-tri'/>
        </span>
        <div className='md:block hidden'>
          <p className='text-2xl relative after:contents[""] after:bg-sec after:w-6 after:h-6 after:rounded-full after:absolute after:-top-2 after:-right-6'>Waseem</p>
          <p>Arshad</p>
        </div>
      </div>

      <nav className='md:col-span-12 md:order-5 order-1 md:mt-5 md:py-5 flex md:border-y md:border-sec md:block'>
        <GiHamburgerMenu className='h-10 w-10 md:hidden block' />
        <ul className='md:flex gap-5 nav-parent hidden' >
          {navMenu.map((menu, index) => {
            return(
              <li key={index}><a className='w- hover:font-bold' href={menu.link}>{menu.title}</a></li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Header