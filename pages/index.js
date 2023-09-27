import { HiArrowNarrowRight } from 'react-icons/hi'
import { ContentCard, ContentActionCard } from "@/components"
import { videos } from '@/dummyData'

export default function Home() {
  return (
    <div className="pl-4 md:pl-0 grid grid-cols-3">

      {/* Videos */}
      <div className='mb-10 md:col-span-2 col-span-3'>
        <div className='flex items-center mb-4'>
          <h2 className='mr-auto md:mr-0'>Videos</h2>
          <p className='mr-1 md:mx-auto'>Browse all videos</p>
          <HiArrowNarrowRight className='mr-4 md:hidden'/> 
        </div>
        <div className='grid grid-flow-col gap-x-3 overflow-hidden md:grid-cols-3 md:grid-flow-row md:gap-2'>
          {videos.map((video, index) => {
            return(
              <ContentCard
                title={video.title}
                creator={video.creator}
                type='video'
                index={index}
                views={video.views}
                abbrViews={video.abbrViews}
              />
            )
          })}
          <ContentActionCard text1='Upload' text2='Your Own Video' />
        </div>
      </div>


      {/* Activity */}
      {/* People */}
      {/* Channel */}
      {/* Documents */}
    </div>
  )
}
