import React, { useState, useEffect, useRef } from 'react';

import Message from './Message';
import RoundedBtn from './common/RoundedBtn';

import { MdSearch, MdSend } from 'react-icons/md';
import { HiDotsVertical } from 'react-icons/hi';
import { BiHappy } from 'react-icons/bi';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

import { cs1, pp } from '../assets/whatsapp';

import { chatsData } from '../data/whatsapp';
import { messagesData } from '../data/whatsapp';

import { getTime } from '../logic/whatsapp';



function ChatDetail() {
  const [messages, setMessages] = useState(messagesData)
  const [typing, setTyping] = useState(false)

  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  const handleInputChange = () => {
    if (inputRef.current.value.length === 0) {
      setTyping(false)
    } else {
      setTyping(true)
    }
  }

  const addMessage = (msg) => {
    const newMessages = [...messages, msg]
    setMessages(newMessages)
  }

  const handleEmojiClick = () => {
    inputRef.current.value += "🔥";
    inputRef.current.focus();
  }

  const handleImageUpload = () => {
    addMessage({
      img: pp,
      time: getTime(),
      sent: true
    })
  }

  const handleInputSubmit = () => {
    if (inputRef.current.value.length > 0) {
      addMessage({
      msg: inputRef.current.value,
      time: getTime(),
      sent:true
    })
    inputRef.current.value = ""
    inputRef.current.focus()
    setTyping(false)
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior:'smooth'
    })
   }, [messages])
  
  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") handleInputSubmit()
    }
    document.addEventListener("keydown", listener)
    return () => document.removeEventListener("keydown", listener)
  })
  
  return (
    <div className="flex flex-col h-screen">
      {/* contact nav */}
      <div className="flex justify-between bg-[#202d33] h-[60px] p-3">
        <div className="flex items-center">
          {/* profile picture */}
          <img src={cs1} alt="profile_picture" className='rounded-full w-[45px] h-[45px] mr-5' />
          {/* info */}
          <div className='flex flex-col'>
            <h1 className="text-white font-medium">{chatsData[0].contact}</h1>
            <p className='text-[#8796a1] text-xs'>Online</p>
          </div>
        </div>

        <div className="flex justify-between items-center w-[85px]">
          <RoundedBtn icon={<MdSearch />} />
          <RoundedBtn icon={<HiDotsVertical />} />
        </div>
      </div>

      {/* chat section */}
      <div className="bg-[#0a131a] bg-[url('assets/images/bg.webp')] bg-contain overflow-y-scroll h-100" style={{ padding: "12px 7%" }}>
        {
          messages.map((msg) => {
            return <Message msg={msg.msg} time={msg.time} isLink={msg.isLink} img={msg.img} sent={msg.sent} />
          })
        }
        <div ref={bottomRef} />
      </div>

      {/* bottom section  */}
      <div className="flex items-center bg-[#202d33] w-100 h-[70px] p-2">
        <RoundedBtn icon={<BiHappy />} onClick={handleEmojiClick} />
        <span className='mr-2'>
          <RoundedBtn icon={<AiOutlinePaperClip />} onClick={handleImageUpload} />
        </span>
        <input
          type="text"
          placeholder="Type a message"
          ref={inputRef}
          onChange={handleInputChange}
          className="bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-100 h-100 px-3 placeholder:text-sm placeholder:text-[#8796a1]"
        />
        <span className="ml-2">
          {typing ? <RoundedBtn icon={<MdSend />} onClick={handleInputSubmit} /> : <RoundedBtn icon={<BsFillMicFill />} />}
        </span>
      </div>
    </div>
  )
}

export default ChatDetail
