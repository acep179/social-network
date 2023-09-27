function ContentCard({type, title, creator, category, role, views, abbrViews, index, previewImg}) {
  return (
    <div className=
      {`
        ${index === 0 ? 'md:col-span-2 md:row-span-2 md:h-full' : 'md:h-40 '}
        ${type === 'document' ? 'h-48' : 'h-40' } p-3
        md:w-full
        flex flex-col
        justify-end
        ${type === 'video' ? 'aspect-video' : type === 'people' ? 'aspect-[4/3]' : 'aspect-[3.8/4]'} 
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
      <h1 className={`mt-auto text-lg ${index === 0 ? '' : 'md:hidden'}`}>{type === 'people' ? creator : title }</h1>
      <div className={`${(type === 'document' && index !== 0) ? '' : 'md:flex md:justify-between md:items-center'}`}>
        {type==='document' && index === 0 && <p className="hidden md:block">By {creator}</p>}
        {type==='document' && index === 0 && <p className="md:hidden text-xs">{category}</p>}
        <p className={`text-xs ${type === 'document' && index === 0 && 'hidden'}`}>{type === 'video' ? creator : (type === 'document' && index !== 0) ? category : (type==='people' && index === 0) ? role : creator }</p>
        {type === 'document' && (<hr className="border border-pri w-7 my-3 md:hidden block"/>)}
        {(type === 'video' && index === 0) || type === 'document' && (<p className="text-sm mt-3 md:hidden">{abbrViews} views</p>) }
        {((type === 'video' || type === 'document') || index === 0 ) && (<p className="text-xs md:block hidden">{views} views</p>) }
      </div>
    </div>
  )
}

export default ContentCard