import { TbArrowBigUpFilled } from 'react-icons/tb'

function ContentActionCard({type, text1, text2}) {
  return (
    <div className='flex justify-center items-center border-2 border-sec hover:cursor-pointer'>
      <div className='flex items-center gap-x-2'>
        <div className='flex justify-center items-center h-10 w-10 rounded-full border-2 border-sec'>
          <TbArrowBigUpFilled className='h-3 w-3'/>
        </div>
        <div>
          <p>{text1}</p>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  )
}

export default ContentActionCard