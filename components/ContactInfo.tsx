import React from 'react'

const ContactInfo = ({
    icon,
    details,
    target
}:{
    icon:React.ReactNode,
    details:string,
    target?:string
}) => {
  return (
    <a  href={target} className='flex items-center w-fit text-white gap-1 text-base md:text-lg lg:text-xl cursor-pointer'>
        <span className='text-inherit'>{icon}</span>
        <p className='font-outfit font-medium'>{details}</p>
    </a>
  )
}

export default ContactInfo