import Image from "next/image"

function ContentCard({type, title, creator, views, abbrViews, index, previewImg}) {
  return (
    <div className=
      {`
        h-40 p-3
        md:w-full
        flex flex-col
        justify-end
        aspect-video md:aspect-auto
        font-medium text-tri
        bg-cover bg-center
        ${index === 0 ? 'md:col-span-2 md:row-span-2 md:h-full' : 'md:h-40 '}
      `}
      style={previewImg ? {
        backgroundImage: `url(${previewImg})`
      } : {
        backgroundColor: '#F4E3CF',
      }}
    >
      <h1 className={`mt-auto text-lg ${index === 0 ? '' : 'md:hidden'}`}>{title}</h1>
      <div className="md:flex md:justify-between md:items-center">
        <p className="text-xs">{creator}</p>
        {index === 0 && <p className="text-sm mt-3 md:hidden">{abbrViews} views</p> }
        <p className="text-xs md:block hidden">{views} views</p>
      </div>
    </div>
  )
}

export default ContentCard