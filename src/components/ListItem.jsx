import { RemoveCircleOutline } from '@mui/icons-material'
import React from 'react'

export default function ListItem({author,index,remove}) {
    const handleRemove = () => {
        remove(index);
      };

  return (
    <div className="w-full font-inter flex justify-between px-5 py-[15px]">

      <p className="'font-inter font-semibold text-sm xs:text-md md:text-lg text-white text-ellipsis overflow-hidden line-clamp-2   ">{author}</p>
      <div onClick={handleRemove} className="px-2 sm:px-5">
        <RemoveCircleOutline fontSize='large' className='text-white cursor-pointer '/>
      </div>
    </div>
  )
}
