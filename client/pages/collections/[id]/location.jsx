import { useState } from 'react';
import Image from 'next/image';

import { IoChevronUpCircleSharp, IoChevronDownCircleSharp } from 'react-icons/io5';

import locationPlaceholder from '../../../public/assets/img/location-placeholder.png';

export default function Location() {

  // Collapsibles
  const [shopping, setShopping] = useState(false);
  const toggleShopping = () => {
    setShopping(!shopping);
  };

  const [hospital, setHospital] = useState(false);
  const toggleHospital = () => {
    setHospital(!hospital);
  };

  const [education, setEducation] = useState(false);
  const toggleEducation = () => {
    setEducation(!education);
  };

  const [recreation, setRecreation] = useState(false);
  const toggleRecreation = () => {
    setRecreation(!recreation);
  };

  const [others, setOthers] = useState(false);
  const toggleOthers = () => {
    setOthers(!others);
  };

  return (
    <section className='py-24'>
      <div className='mx-auto w-10/12'>
        <p className="text-3xl text-sp pb-8 leading-8 font-extrabold sm:text-5xl">
          Location
        </p>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 sm:gap-y-8 md:gap-y-0 pb-16'>
          <p className='md:w-9/12'>
            Situated just 8km away from the Shah Alam City Centre, Alam Impian provides residences easy access to various facilities and amenities, such as schools, malls, parks and more.
          </p>
          <p className='md:w-9/12'>
            The well-connected nature of Alam Impian is an added boon for those who work in Kuala Lumpur, as the township is linked via the Lebuhraya Kemuning – Shah Alam (LKSA), and the KESAS highway, while also gaining easy access to the Federal Highway and the ELITE highway.
          </p>
        </div>
        <div className='pb-20'>
          <Image src={locationPlaceholder} />
        </div>

        <div className='shadow-xl rounded-[5px]'>
          <div className={`flex justify-between px-8 py-12 ${shopping ? "" : "border-b-[2px] border-spGreyText"} `} onClick={toggleShopping}>
            <p className="text-black font-bold text-2xl leading-relaxed">Shopping</p>
            <div className='text-[50px] text-spGreyText'>
              {shopping ? <IoChevronUpCircleSharp /> : <IoChevronDownCircleSharp />}
            </div>
          </div>

          {shopping && (
            <div className='bg-spGreyBg flex px-12 py-8 justify-between border-b-[2px] border-spGreyText'>
              <ul className="text-black text-lg leading-relaxed list-disc md:pl-8">
                <li>
                  Kompleks PKNS Shah Alam
                </li>
                <li>
                  SACC Mall
                </li>
                <li>
                  Shah Alam Mydin Mart
                </li>
                <li>
                  AEON Big Section 23
                </li>
                <li>
                  Ole Ole Shopping Centre
                </li>
                <li>
                  Econsave
                </li>
                <li>
                  NSK Trade City
                </li>
              </ul>
            </div>
          )}

          <div className={`flex justify-between px-8 py-12 ${hospital ? "" : "border-b-[2px] border-spGreyText"}`} onClick={toggleHospital}>
            <p className="text-black font-bold text-2xl leading-relaxed">Hospital</p>
            <div className='text-[50px] text-spGreyText'>
              {hospital ? <IoChevronUpCircleSharp /> : <IoChevronDownCircleSharp />}
            </div>
          </div>

          {hospital && (
            <div className='bg-spGreyBg flex px-12 py-8 justify-between border-b-[2px] border-spGreyText'>
              <ul className="text-black text-lg leading-relaxed list-disc md:pl-8">
                <li>
                  Kompleks PKNS Shah Alam
                </li>
                <li>
                  SACC Mall
                </li>
                <li>
                  Shah Alam Mydin Mart
                </li>
                <li>
                  AEON Big Section 23
                </li>
                <li>
                  Ole Ole Shopping Centre
                </li>
                <li>
                  Econsave
                </li>
                <li>
                  NSK Trade City
                </li>
              </ul>
            </div>
          )}

          <div className={`flex justify-between px-8 py-12 ${education ? "" : "border-b-[2px] border-spGreyText"}`} onClick={toggleEducation}>
            <p className="text-black font-bold text-2xl leading-relaxed">Education</p>
            <div className='text-[50px] text-spGreyText'>
              {education ? <IoChevronUpCircleSharp /> : <IoChevronDownCircleSharp />}
            </div>
          </div>

          {education && (
            <div className='bg-spGreyBg flex px-12 py-8 justify-between border-b-[2px] border-spGreyText'>
              <ul className="text-black text-lg leading-relaxed list-disc md:pl-8">
                <li>
                  Kompleks PKNS Shah Alam
                </li>
                <li>
                  SACC Mall
                </li>
                <li>
                  Shah Alam Mydin Mart
                </li>
                <li>
                  AEON Big Section 23
                </li>
                <li>
                  Ole Ole Shopping Centre
                </li>
                <li>
                  Econsave
                </li>
                <li>
                  NSK Trade City
                </li>
              </ul>
            </div>
          )}

          <div className={`flex justify-between px-8 py-12 ${recreation ? "" : "border-b-[2px] border-spGreyText"}`} onClick={toggleRecreation}>
            <p className="text-black font-bold text-2xl leading-relaxed">Recreation</p>
            <div className='text-[50px] text-spGreyText'>
              {recreation ? <IoChevronUpCircleSharp /> : <IoChevronDownCircleSharp />}
            </div>
          </div>

          {recreation && (
            <div className='bg-spGreyBg flex px-12 py-8 justify-between border-b-[2px] border-spGreyText'>
              <ul className="text-black text-lg leading-relaxed list-disc md:pl-8">
                <li>
                  Kompleks PKNS Shah Alam
                </li>
                <li>
                  SACC Mall
                </li>
                <li>
                  Shah Alam Mydin Mart
                </li>
                <li>
                  AEON Big Section 23
                </li>
                <li>
                  Ole Ole Shopping Centre
                </li>
                <li>
                  Econsave
                </li>
                <li>
                  NSK Trade City
                </li>
              </ul>
            </div>
          )}

          <div className={`flex justify-between px-8 py-12 ${others ? "" : "border-b-[2px] border-spGreyText"}`} onClick={toggleOthers}>
            <p className="text-black font-bold text-2xl leading-relaxed">Others</p>
            <div className='text-[50px] text-spGreyText'>
              {others ? <IoChevronUpCircleSharp /> : <IoChevronDownCircleSharp />}
            </div>
          </div>

          {others && (
            <div className='bg-spGreyBg flex px-12 py-8 justify-between border-b-[2px] border-spGreyText'>
              <ul className="text-black text-lg leading-relaxed list-disc md:pl-8">
                <li>
                  Kompleks PKNS Shah Alam
                </li>
                <li>
                  SACC Mall
                </li>
                <li>
                  Shah Alam Mydin Mart
                </li>
                <li>
                  AEON Big Section 23
                </li>
                <li>
                  Ole Ole Shopping Centre
                </li>
                <li>
                  Econsave
                </li>
                <li>
                  NSK Trade City
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}