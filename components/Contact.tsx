'use client';
import React, { useState } from "react";
import Input from "./Input";
import Buttton from "./Buttton";
import ContactInfo from "./ContactInfo";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import constants from '@/utility/constants'


const Contact = () => {
  const [mailData, setMailData ] = useState({
    customerName: '',
    subject: '',
    mailBody:''
  });

  const { phoneNumber, whatsappNumber, email } = constants.contactInfo;

  return (
    <div id="contacts" className="h-fit rounded-[30px] gradient-bg text-white flex flex-col items-center margin-top horizontal-margin">
      <div className="my-[70px] flex items-center flex-col mx-auto gap-[79px] w-full">
        <div className="flex flex-col items-center w-fit mx-auto">
          <h2 className="font-outfit text-[30px] md:text-[40px] lg:text-[50px] font-medium text-center">
            Its your time to take off!
          </h2>
          <h3 className="font-outfit text-[24px] font-medium text-center">
            Bring your ideas to life, Let's collaborate today!
          </h3>
        </div>
        <div className="flex flex-col w-[90%] md:w-[80%] lg:w-[50%] mx-auto ">
          <div className="flex items-center gap-6 w-full">
            <Input
              type="text"
              placeholder="Enter your name"
              className="w-1/2"
              value={mailData.customerName}
              onChangeHandle = {(data)=>setMailData(pre=> {return {...pre, customerName: data}})}
            />
            <Input
              type="text"
              placeholder="Enter your subject"
              className="w-1/2"
              value = {mailData.subject}
              onChangeHandle = {(data)=>setMailData(pre=> {return {...pre, subject: data}})}
            />
          </div>
          <Input
            type="textarea"
            placeholder="Give us a quick brief of your requirement"
            className="mt-[24px] w-full h-[210px]"
            value ={mailData.mailBody}
            onChangeHandle = {(data)=>setMailData(pre=> {return {...pre, mailBody: data}})}
          />
          <div className="flex items-center justify-end mt-[19px] w-full">
            <Buttton
              className="w-[100px] md:w-[120px] lg:w-[183px] -end-0"
              buttonName="Contact"
              type="secondary"
              targetUrl={`mailto:${email}?subject=${mailData.subject}&body=${mailData.mailBody}`}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between xl:w-[60%] lg:w-[80%] md:w-[90%] gap-2 md:gap-0">
            <ContactInfo icon={<MdPhone/>} details={`+91 ${phoneNumber}`} target={`tel:${phoneNumber}`}/>
            <ContactInfo icon={<FaWhatsapp/>} details={`+91 ${whatsappNumber}`} target={`https://wa.me/${whatsappNumber}`}/>
            <ContactInfo icon={<MdOutlineEmail/>} details={email} target={`mailto:${email}`}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
