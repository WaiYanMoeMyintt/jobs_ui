import React from 'react'
import Image from 'next/image'
const JobRow = () => {
  return (
    <div className="bg-white shadow-sm p-6 rounded-lg flex gap-4">
         <div>
              <Image  src = "/assets/dhl.svg" className='rounded' alt = "logo" width={55} height={55}/>
         </div>
         <div className='grow'>
             <div className='text-sm text-gray-800 font-semibold'>DHL</div>
             <div className='font-bold my-1 text-lg'>Frontend Developer</div>
             <div className='text-sm text-gray-500'>On Site | Vietnam, Ho Chi Minh | Full Time</div>
         </div>
         <div className='content-md text-center '>
             <p className='text-sm text-gray-500'>2 weeks ago</p>
         </div>
    </div>
  )
}

export default JobRow