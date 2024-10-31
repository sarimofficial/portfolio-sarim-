import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";



const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-in-down">Get in touch</h2>
            <p className='text-gray-200 text-[18px] pt-2'data-aos="zoom-in-down">
                Drop me a Line give me a call, or sent me a message by subitting the from.
            </p>
            <div className='flex gap=3 items-center'data-aos="zoom-in-down">
            <AiOutlineMail size={30} /> mrsarimofficial@gmail.com
            </div>
            <div className='flex gap=3 items-center' data-aos="zoom-in-down">
            <BsTelephone size={30} /> 03120013034 03482829569
            </div>
        </div>
         <div className='space-y8'>
        <div className='flex flex-col gap-1'data-aos="zoom-in-down">
        <label htmlFor="name">Name</label>
        <input type="text"
        className='h-[40px] bg-transparent border bg-slate-500'
        id='name'/>
        </div>
        <div className='flex flex-col gap-1'data-aos="zoom-in-down">
        <label htmlFor="email">Email</label>
        <input type="text"
        className='h-[40px] bg-transparent border bg-slate-500'
        id='name'/>
        </div>
        <div className='flex flex-col gap-1'data-aos="zoom-in-down">
        <label htmlFor="msg">Message</label>
        <textarea
        className='bg-transparent border bg-slate-500'
        id='msg' rows={8}>
        </textarea>
        </div>
        <button className=' gap-2 bg-slate-600 p-2 px-6 mt-4' data-aos="zoom-in-up">Send</button>
      
      </div>
    </div>
    </div>
  )
}

export default Contact
