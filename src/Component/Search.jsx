import { IoSearchOutline } from "react-icons/io5"

const Search = () => {
    const tags=[
        {
            id:1,
            name:'All',
        },
        {
            id:2,
            name:'React',
        },
        {
            id:3,
            name:'React Native',
        },
        {
            id:4,
            name:'Angular',
        },
        {
            id:5,
            name:'UI/UX',
        },
    ]
  return (

        <div className='flex justify-center mt-8 flex-col 
    px-[70] md:px-[150px]'>
        <img src="https://img.lovepik.com//back_pic/05/61/36/115b4890e8eab7f.jpg_wh860.jpg" className='rounded-2xl ' />
       <div className='bg-white shadow-lg p-3
       rounded-lg mt-[-20px] mx-[23%] flex items-center'>
            <IoSearchOutline className='text-[20px]
             text-gray-400' />
            <input type='text'  placeholder='Search'
            className='outline-none ml-2 w-full'/>
       </div>
      
    </div>
  )
}

export default Search