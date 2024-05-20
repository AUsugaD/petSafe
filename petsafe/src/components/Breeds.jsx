import React from 'react'

const Breeds = () => {
  return (
    <div className='bg-gray-100 p-4 flex flex-col items-center justify-center gap-7'>
        <h1 className='flex flex-col items-center justify-center p-3 gap-8 text-primary'>FOR RODENTS
        </h1>
        <div className=' flex items-center gap-10'>
            <img src="mouse.png" className="w-50" />
            <img src="cat.png" className="w-50" />
            <img src="dog.png" className="w-50" />
        </div>
        <div >
            <h1 className='text-primary'>FOR CATS</h1>
            <div>
                <h1> <img src="cat.png" className="w-50" /></h1>
            </div>
        </div>
    </div>
   
  )
}

export default Breeds