import { useState } from 'react'

import { ModalContainer } from '.'

import { AiOutlineSearch } from 'react-icons/ai'
import { BiSolidUpArrowAlt } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiUpload } from 'react-icons/hi'
import { RiUploadFill } from 'react-icons/ri'

function Header() {

  const [showModalMenu, setShowModalMenu] = useState(false)
  const [showModalProfile, setShowModalProfile] = useState(false)

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

  const user = {
    name: 'Waseem Ahmad',
    role: 'UI/UX Designer',
    img: null,
  }
  
  const menuModal = () => {
    setShowModalMenu(!showModalMenu)
  }

  const profileModal = () => {
    setShowModalProfile(!showModalProfile)
  }

  return (
    <div className="py-7 md:px-0 px-5 grid grid-cols-12 md:gap-x-6 gap-y-3 items-center relative">

      <div className='lg:col-span-3 md:col-span-4 col-span-8 md:order-1 order-2 md:block flex justify-center'>
        <h1 className='sm:text-4xl text-xl font-thin'> <strong>Social</strong>Network</h1>
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
        <BsFillPersonFill className='h-10 w-10 text-sec md:hidden block' onClick={profileModal} />
        <span className='items-center justify-center h-11 mr-2 aspect-square bg-sec md:flex hidden'>
          <BsFillPersonFill className='text-tri'/>
        </span>
        <div className='md:block hidden'>
          <p className='text-2xl relative after:contents[""] after:bg-sec after:w-6 after:h-6 after:rounded-full after:absolute after:-top-2 after:-right-6'>Waseem</p>
          <p>Arshad</p>
        </div>
      </div>

      <nav className='md:col-span-12 md:order-5 order-1 md:mt-5 md:py-5 flex md:border-y md:border-sec md:block'>
        <GiHamburgerMenu className='h-10 w-10 md:hidden block' onClick={menuModal} />
        <ul className='md:flex gap-5 nav-parent hidden' >
          {navMenu.map((menu, index) => {
            return(
              <li key={index}><a className='hover:font-bold' href={menu.link}>{menu.title}</a></li>
            )
          })}
        </ul>
      </nav>

      {showModalMenu && (
        <ModalContainer className='bg-sec min-w-[300px] h-[60vh] p-5 rounded-lg' setShowModal={setShowModalMenu} stopPropagation >
          <ul className='flex flex-col justify-between gap-5 text-tri' >
            <p className='pb-3 font-bold text-center border-b border-pri/30'>Main Menu</p>
            {navMenu.map((menu, index) => {
              return(
                <li key={index} onClick={menuModal}><a className='hover:font-bold' href={menu.link}>{menu.title}</a></li>
              )
            })}
          </ul>
        </ModalContainer>
      )}

      {showModalProfile && (
        <ModalContainer className='bg-sec min-w-[300px] h-[60vh] py-5 rounded-lg text-pri' setShowModal={setShowModalProfile} stopPropagation >
          {user.img ? null : <div className='w-16 aspect-square border border-sec bg-tri mx-auto -mt-12'></div>}
          <p className='mt-5 text-lg text-center font-bold'>{user.name}</p>
          <p className='text-center text-xs'>{user.role}</p>
          <div className='px-4'>
            <button className='w-full p-2 flex items-center justify-center gap-2 bg-tri text-center text-sec mt-4 hover:cursor-pointer'>
              <HiUpload className='text-2xl' />
              <p>Start Upload</p>
            </button>
            <hr className='w-full mt-5 border border-tri/20' />
          </div>
          <ul>
            <li className='py-3 px-4 hover:bg-[#C1B3A340]'><a href="#">My Profile</a></li>
            <li className='py-3 px-4 hover:bg-[#C1B3A340]'><a href="#">Edit Profile</a></li>
            <li className='py-3 px-4 hover:bg-[#C1B3A340]'><a href="#">Security</a></li>
          </ul>
          <button onClick={profileModal} className='flex justify-center items-center gap-2 w-full mt-4 py-3 text-center bg-[#C1B3A340] border-t border-tri/20'>
            <p>Log Out</p>
            <FaLongArrowAltRight className='pl-[0.35rem] pr-[0.1rem] bg-pri rounded-full text-sec'/>
            </button>

        </ModalContainer>
      )}

    </div>
  )
}

export default Header