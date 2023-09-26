import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'

function Footer() {

  const menuFooter = [
    {
      title: 'About',
      link: '#about',
    },
    {
      title: 'For Business',
      link: '#for-business',
    },
    {
      title: 'Suggestions',
      link: '#suggestions',
    },
    {
      title: 'Help & FAQs',
      link: '#help-and-faqs',
    },
    {
      title: 'Contacts',
      link: '#contacts',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
  ]

  return (
    <div className="md:px-0 px-5 flex flex-col md:items-start items-center py-5 border-t border-sec">

      {/* Sosmed */}
      <div className='flex text-pri gap-2'>
        <span className='bg-sec p-3 md:order-3'>
          <BiLogoFacebook />
        </span>
        <span className='bg-sec p-3 md:order-1'>
          <BiLogoTwitter />
        </span>
        <span className='bg-sec p-3 md:order-2'>
          <BiLogoLinkedin />
        </span>
      </div>

      {/* Footer Menu */}
      <nav>
        <ul className='flex flex-wrap md:justify-normal justify-center nav-parent-footer mt-10'>
          {menuFooter.map((menu, index) => {
            return(
              <li key={index} className='mr-5 hover:font-bold'>
                <a href={menu.link}>{menu.title}</a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Copy Right */}
      <div className='mt-10'>
        <p className='md:mx-0 mx-auto'>&copy; Copyright 2013 companyname inc.</p>
        <nav>
          <ul className='flex md:justify-normal justify-center'>
            <li className='md:after:content-["/"] md:after:ml-5 mr-5 hover:font-bold'>
              <a href="#privacy">Privacy</a>
            </li>
            <li className='hover:font-bold'>
              <a href="#terms">Terms</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Footer