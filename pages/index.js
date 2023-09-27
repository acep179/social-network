import { HiArrowNarrowRight } from 'react-icons/hi'
import { ActivityCard, ChannelCard, ContentCard, ContentActionCard } from "@/components"
import { activities, channels, documents, peoples, videos } from '@/dummyData'

export default function Home() {
  return (
    <div className="pl-4 md:pl-0 grid md:grid-cols-3 grid-cols-1 gap-5">

      {/* Videos */}
      <div id='videos' className='mb-10 md:col-span-2'>
        <div className='flex items-center md:items-end mb-4'>
          <h2 className='mr-auto md:mr-0 md:text-3xl text-xl'>Videos</h2>
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
          <ContentActionCard type='upload' text1='Upload' text2='Your Own Video' />
        </div>
      </div>

      {/* Activity */}
      <div id='activity' className='mb-10 pr-4 md:border-sec md:border-b-2'>
        <div className='flex items-center md:items-end mb-4 md:pb-4 md:border-b-2 md:border-sec'>
          <h2 className='mr-auto md:mr-0 md:text-3xl text-xl'>Activity</h2>
          <p className='mr-1 md:mx-auto'>View timeline <span className='xl:inline hidden'>/ Filter activities</span></p>
          <HiArrowNarrowRight className='md:hidden'/> 
        </div>
        <div>
          {activities.map((activity, index) => {
            return(
              <ActivityCard key={index} name={activity.name} message={activity.message} timeElapsed={activity.timeElapsed} />
            )
          })}
        </div>
      </div>

      {/* People */}
      <div id='people' className='mb-10 md:col-span-2'>
        <div className='flex items-center md:items-end mb-4'>
          <h2 className='mr-auto md:mr-0 md:text-3xl text-xl'>People</h2>
          <p className='mr-1 md:mx-auto'>View all</p>
          <HiArrowNarrowRight className='mr-4 md:hidden'/> 
        </div>
        <div className='grid grid-flow-col gap-x-3 overflow-hidden md:grid-cols-3 md:grid-flow-row md:gap-2'>
          {peoples.map((people, index) => {
            return(
              <ContentCard
                key={index}
                creator={people.creator}
                type='people'
                index={index}
                role={people.role}
                views={people.views}
                previewImg={people.previewImg}
              />
            )
          })}
          <ContentActionCard type='show' text1='Show' text2='Your Work' />
        </div>
      </div>

      {/* Channel */}
      <div id='channels' className='mb-10 pr-4 md:border-sec md:border-b-2'>
        <div className='flex items-center md:items-end mb-4 md:pb-4 md:border-b-2 md:border-sec'>
          <h2 className='mr-auto md:mr-0 md:text-3xl text-xl'>Channel</h2>
          <p className='mr-1 md:mx-auto md:text-xs lg:text-base'>Browse all channel</p>
          <HiArrowNarrowRight className='md:hidden'/> 
        </div>
        <div className='grid grid-cols-3 md:grid-cols-2 gap-3 mr-4 pb-4'>
          {channels.map((channel, index) => {
            return (
              <ChannelCard key={index} title={channel.title}/>
            )
          })}
        </div>
      </div>

      {/* Documents */}
      <div id='documents' className='mb-10 md:col-span-2'>
        <div className='flex items-center md:items-end mb-4'>
          <h2 className='mr-auto md:mr-0 md:text-3xl text-xl'>Documents</h2>
          <p className='mr-1 md:mx-auto'>Browse all</p>
          <HiArrowNarrowRight className='mr-4 md:hidden'/> 
        </div>
        <div className='grid grid-flow-col gap-x-3 overflow-hidden md:grid-cols-3 md:grid-flow-row md:gap-2'>
          {documents.map((document, index) => {
            return(
              <ContentCard
                key={index}
                creator={document.creator}
                type='document'
                index={index}
                title={document.title}
                category={document.category}
                views={document.views}
                abbrViews={document.abbrViews}
                previewImg={document.previewImg}
              />
            )
          })}
          <ContentActionCard type='share' text1='Share' text2='Your Document' />
        </div>
      </div>
    </div>
  )
}
