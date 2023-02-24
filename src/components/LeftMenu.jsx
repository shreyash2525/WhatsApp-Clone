import React from 'react'
import RoundedBtn from './common/RoundedBtn'
import { MdPeopleAlt } from 'react-icons/md'
import { TbCircleDashed } from 'react-icons/tb'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { HiDotsVertical } from 'react-icons/hi'
import { pp } from '../assets/whatsapp'

function LeftMenu() {
  return (
    <div className='flex flex-col border-r border-neutral-700 w-100 h-screen'>
        {/* Profile Nav */}
        <div className="flex justify-between items-center bg-[#202d33] h-[60px] p-3">
            <img src={pp} className="rounded-full w-[40px]" alt="profile_picture" />
            {/* profile nav buttons    */}
            <div className='flex justify-between w-[175px]'>
                <RoundedBtn icon={<MdPeopleAlt />} />
                <RoundedBtn icon={<TbCircleDashed />} />
                <RoundedBtn icon={<BsFillChatLeftTextFill />} />
                <RoundedBtn icon={<HiDotsVertical />} />  
            </div>
        </div>
    </div>
  )
}

export default LeftMenu

