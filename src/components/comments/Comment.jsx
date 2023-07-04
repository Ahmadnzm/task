import React from 'react'
import {PiFlagThin} from "react-icons/pi"
import {BsArrow90DegRight} from "react-icons/bs"
function Comment() {
  return (
    <section className='comment border-b-[1px] border-b-[#6b6b6b] mb-7 pb-2'>
    <div className='flex justify-between items-center'>
        <div className='prof flex items-center'>
            <div className='w-16 h-16 rounded-xl ml-4'>
                <img src={require("../../assets/images/profile.png")}/>
            </div>
            <div className='flex flex-col'>
                <p className='font-normal text-sm text-[#6b6b6b]'>نام کاربر</p>
                <p className='font-normal text-xs text-[#6b6b6b]'> 24 فروردین 1402</p>
            </div>
        </div>
        <div><PiFlagThin/></div>
    </div>
    <div className='mt-[20px] pr-7'>
        <p className='font-normal text-justify text-sm text-[#6b6b6b]'>
        “متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر متن نظر”
        </p>
    </div>
    <div className='mt-7 px-10 flex justify-between items-center'>
        <p className='text-green-400'>پاسخ ها</p>
        <p className='text-green-400'><BsArrow90DegRight/></p>
    </div>
    </section>
  )
}

export default Comment