

const IntroPost = () => {
  return (
    <div className='grid grid-cols-1 cursor-pointer
     md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8'>
        <img src="" className='
        rounded-2xl object-cover w-full h-full'/>
        <div>
            <h4 className='text-red-500'></h4>
            <h2 className='text-[23px] font-bold mt-5'></h2>
            <h4 className='line-clamp-6 text-gray-400 mt-5'></h4>
        <div className='flex items-center mt-5'>
            <img src="https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png"
            className='w-[50px] rounded-full'/>
            <div className='ml-2'>
                <h3 className='font-bold '>Tubeguruji</h3>
                <h3 className='text-gray-500'>24 Sept 2024</h3>
            </div>
        </div>
        </div>
    </div>
  )
}

export default IntroPost