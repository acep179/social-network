import { BsChatDotsFill } from 'react-icons/bs'

function ActivityCard({name, message, timeElapsed}) {
  return (
    <div className='flex bg-sec/10 mb-5 p-2 rounded hover:cursor-pointer hover:border-2 hover:border-sec group relative'>
      <div className="w-0 h-0 border-[15px] top-0 right-0 border-t-sec border-r-sec border-l-pri/10 border-b-pri/10 rounded-tr-sm absolute hidden group-hover:block cursor-pointer" onClick={null}></div>
      <p className='absolute top-0 right-1 text-tri text-xs font-bold hidden group-hover:block'>x</p>
      <div className='bg-sec rounded-sm aspect-square xl:aspect-video h-14 xl:h-16 xl:mt-1 mr-3'>
      </div>
      <div>
        <p className='font-bold'>{name} <span className='text-sm font-light italic'>commented</span></p>
        <p>{message}</p>
        <div className='text-xs flex mt-2'>
          <BsChatDotsFill className='mr-2 transform -scale-x-100' />
          <p className='font-bold'>{timeElapsed}</p>
        </div>
      </div>
    </div>
  )
}

export default ActivityCard