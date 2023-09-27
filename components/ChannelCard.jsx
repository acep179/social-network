function ChannelCard({title}) {
  return (
    <div className="w-full aspect-video p-3 md:p-2 rounded bg-sec flex justify-center items-center md:justify-start md:items-end mt-auto relative group">
        <div className="w-0 h-0 border-[13px] top-0 right-0 border-t-pri border-r-pri border-l-sec border-b-sec rounded-tr-sm absolute hidden group-hover:block cursor-pointer" onClick={null}></div>
      <p className='absolute top-0 right-1 text-sec text-xs font-bold hidden group-hover:block'>x</p>
      <p className=" text-tri xsm:text-base md:text-xs lg:text-base text-xs text-center md:text-left font-bold leading-tight">{title}</p>
    </div>
  )
}

export default ChannelCard