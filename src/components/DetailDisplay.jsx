import React from 'react'
import { baseImgUrl } from '../constans'

const DetailDisplay = ({title,data}) => {
  return (
    <div className=' mb-6'>
      <h2 className='text-xl font-semibold mb-2'>{title}</h2>
      <div className=' flex gap-5 '>
       
        {data.map((item)=> 
        item.logo_path ? (
         <div key={item.id} className='bg-white py-1 px-2 rounded-md'>
           <img 
           src={baseImgUrl + item.logo_path} 
           className=' w-[100px] h-[40px]  max-sm:h-[20px] object-contain'/>

         </div> 
         ):(
            <span className=' border py-1 px-2 rounded-md text-center grid place-items-center whitespace-nowrap max-md: text-[13px] '
            key={item.id}>
                {item.name}
        </span>
        )
        
        )}
      </div>
    </div>
  )
}

export default DetailDisplay
