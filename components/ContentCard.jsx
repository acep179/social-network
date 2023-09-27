import Image from "next/image"

function ContentCard({type, title, creator, role, views, abbrViews, index, previewImg}) {
  return (
    <div className=
      {`
        ${index === 0 ? 'md:col-span-2 md:row-span-2 md:h-full' : 'md:h-40 '}
        h-40 p-3
        md:w-full
        flex flex-col
        justify-end
        ${type === 'video' ? 'aspect-video' : 'aspect-[4/3]'} 
        md:aspect-auto
        font-medium text-tri
        bg-cover bg-center
        rounded
      `}
      style={previewImg ? {
        backgroundImage: `url(${previewImg})`
      } : {
        backgroundColor: '#F4E3CF',
      }}
    >
      <h1 className={`mt-auto text-lg ${index === 0 ? '' : 'md:hidden'}`}>{type === 'video' ? title : creator}</h1>
      <div className="md:flex md:justify-between md:items-center">
        <p className="text-xs">{type === 'video' ? creator : index === 0 ? role : creator}</p>
        {type === 'video' && index === 0 && (<p className="text-sm mt-3 md:hidden">{abbrViews} views</p>) }
        {(type === 'video' || index===0) && (<p className="text-xs md:block hidden">{views} views</p>) }
      </div>
    </div>
  )
}

export default ContentCard