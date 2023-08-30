import { useState } from 'react';

import { HiMagnifyingGlass, HiChevronDown } from 'react-icons/hi2';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

export default function Unit() {
  // Unit Collapsibles
  const [firstUnit, setFirstUnit] = useState(false);
  const toggleFirstUnit = () => {
    setFirstUnit(!firstUnit);
  };

  const [secondUnit, setSecondUnit] = useState(false);
  const toggleSecondUnit = () => {
    setSecondUnit(!secondUnit);
  };

  const [thirdUnit, setThirdUnit] = useState(false);
  const toggleThirdUnit = () => {
    setThirdUnit(!thirdUnit);
  };

  const [fourthUnit, setFourthUnit] = useState(false);
  const toggleFourthUnit = () => {
    setFourthUnit(!fourthUnit);
  };

  const [fifthUnit, setFifthUnit] = useState(false);
  const toggleFifthUnit = () => {
    setFifthUnit(!fifthUnit);
  };

  const [sixthUnit, setSixthUnit] = useState(false);
  const toggleSixthUnit = () => {
    setSixthUnit(!sixthUnit);
  };

  const [seventhUnit, setSeventhUnit] = useState(false);
  const toggleSeventhUnit = () => {
    setSeventhUnit(!seventhUnit);
  };

  return (
    <section className='py-24'>
      <div className='mx-auto w-10/12'>
        <p className="text-3xl text-sp pb-8 leading-8 font-extrabold sm:text-5xl">
          Available
        </p>

        <div className='grid grid-cols-3 gap-x-12 pb-8'>
          <div>
            <p className="text-black font-semibold text-lg leading-relaxed">Unit</p>
            <div className='border-b-[2px] border-spGreyText text-right text-[20px] pb-4 text-spGreyText unitIcons'>
              <HiMagnifyingGlass />
            </div>
          </div>
          <div>
            <p className="text-black font-semibold text-lg leading-relaxed">Price Range (RM)</p>
            <div className='border-b-[2px] border-spGreyText text-right text-[20px] pb-4 text-spGreyText unitIcons'>
              <HiChevronDown />
            </div>
          </div>
          <div>
            <p className="text-black font-semibold text-lg leading-relaxed">Layout Type</p>
            <div className='border-b-[2px] border-spGreyText text-right text-[20px] pb-4 text-spGreyText unitIcons'>
              <HiChevronDown />
            </div>
          </div>
        </div>

        {/* First Unit */}
        <div className='border-spGreyText border-[2px] rounded-[5px] py-4 px-6 mb-6'>
          <div className={`grid grid-cols-5 ${firstUnit ? "border-b-[2px] border-spGreyText pb-4" : ""}`} onClick={toggleFirstUnit}>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Unit</p>
              <p className="text-black font-medium text-xl leading-relaxed">PT 157216</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Size</p>
              <p className="text-black font-medium text-xl leading-relaxed">2,339 SQ FT</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Price</p>
              <p className="text-black font-medium text-xl leading-relaxed">RM 1,448,667.00</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Layout</p>
              <p className="text-black font-medium text-xl leading-relaxed">B1</p>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Street</p>
                <p className="text-black font-medium text-xl leading-relaxed">-</p>
              </div>
              <div className='text-spGreyText text-[50px]'>
                {firstUnit ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
              </div>
            </div>
          </div>

          {firstUnit && (
            <div className='grid grid-cols-[2fr_1fr_2fr_1fr] pt-4'>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Project</p>
                <p className="text-black font-medium text-xl leading-relaxed">03 CLUSTER-CASABLANCA 2</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Tenure</p>
                <p className="text-black font-medium text-xl leading-relaxed">Freehold</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Address</p>
                <p className="text-black font-medium text-xl leading-relaxed">No. 5 Jalan Hang Nadim 35/46B</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Bumi</p>
                <p className="text-black font-medium text-xl leading-relaxed">No</p>
              </div>
            </div>
          )}
        </div>

        {/* Second Unit */}
        <div className='border-spGreyText border-[2px] rounded-[5px] py-4 px-6 mb-6'>
          <div className={`grid grid-cols-5 ${secondUnit ? "border-b-[2px] border-spGreyText pb-4" : ""}`} onClick={toggleSecondUnit}>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Unit</p>
              <p className="text-black font-medium text-xl leading-relaxed">PT 157216</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Size</p>
              <p className="text-black font-medium text-xl leading-relaxed">2,339 SQ FT</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Price</p>
              <p className="text-black font-medium text-xl leading-relaxed">RM 1,448,667.00</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Layout</p>
              <p className="text-black font-medium text-xl leading-relaxed">B1</p>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Street</p>
                <p className="text-black font-medium text-xl leading-relaxed">-</p>
              </div>
              <div className='text-spGreyText text-[50px]'>
                {secondUnit ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
              </div>
            </div>
          </div>

          {secondUnit && (
            <div className='grid grid-cols-[2fr_1fr_2fr_1fr] pt-4'>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Project</p>
                <p className="text-black font-medium text-xl leading-relaxed">03 CLUSTER-CASABLANCA 2</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Tenure</p>
                <p className="text-black font-medium text-xl leading-relaxed">Freehold</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Address</p>
                <p className="text-black font-medium text-xl leading-relaxed">No. 5 Jalan Hang Nadim 35/46B</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Bumi</p>
                <p className="text-black font-medium text-xl leading-relaxed">No</p>
              </div>
            </div>
          )}
        </div>

        {/* Third Unit */}
        <div className='border-spGreyText border-[2px] rounded-[5px] py-4 px-6 mb-6'>
          <div className={`grid grid-cols-5 ${thirdUnit ? "border-b-[2px] border-spGreyText pb-4" : ""}`} onClick={toggleThirdUnit}>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Unit</p>
              <p className="text-black font-medium text-xl leading-relaxed">PT 157216</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Size</p>
              <p className="text-black font-medium text-xl leading-relaxed">2,339 SQ FT</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Price</p>
              <p className="text-black font-medium text-xl leading-relaxed">RM 1,448,667.00</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Layout</p>
              <p className="text-black font-medium text-xl leading-relaxed">B1</p>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Street</p>
                <p className="text-black font-medium text-xl leading-relaxed">-</p>
              </div>
              <div className='text-spGreyText text-[50px]'>
                {thirdUnit ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
              </div>
            </div>
          </div>

          {thirdUnit && (
            <div className='grid grid-cols-[2fr_1fr_2fr_1fr] pt-4'>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Project</p>
                <p className="text-black font-medium text-xl leading-relaxed">03 CLUSTER-CASABLANCA 2</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Tenure</p>
                <p className="text-black font-medium text-xl leading-relaxed">Freehold</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Address</p>
                <p className="text-black font-medium text-xl leading-relaxed">No. 5 Jalan Hang Nadim 35/46B</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Bumi</p>
                <p className="text-black font-medium text-xl leading-relaxed">No</p>
              </div>
            </div>
          )}
        </div>

        {/* Fourth Unit */}
        <div className='border-spGreyText border-[2px] rounded-[5px] py-4 px-6 mb-6'>
          <div className={`grid grid-cols-5 ${fourthUnit ? "border-b-[2px] border-spGreyText pb-4" : ""}`} onClick={toggleFourthUnit}>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Unit</p>
              <p className="text-black font-medium text-xl leading-relaxed">PT 157216</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Size</p>
              <p className="text-black font-medium text-xl leading-relaxed">2,339 SQ FT</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Price</p>
              <p className="text-black font-medium text-xl leading-relaxed">RM 1,448,667.00</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Layout</p>
              <p className="text-black font-medium text-xl leading-relaxed">B1</p>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Street</p>
                <p className="text-black font-medium text-xl leading-relaxed">-</p>
              </div>
              <div className='text-spGreyText text-[50px]'>
                {fourthUnit ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
              </div>
            </div>
          </div>

          {fourthUnit && (
            <div className='grid grid-cols-[2fr_1fr_2fr_1fr] pt-4'>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Project</p>
                <p className="text-black font-medium text-xl leading-relaxed">03 CLUSTER-CASABLANCA 2</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Tenure</p>
                <p className="text-black font-medium text-xl leading-relaxed">Freehold</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Address</p>
                <p className="text-black font-medium text-xl leading-relaxed">No. 5 Jalan Hang Nadim 35/46B</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Bumi</p>
                <p className="text-black font-medium text-xl leading-relaxed">No</p>
              </div>
            </div>
          )}
        </div>

        {/* Fifth Unit */}
        <div className='border-spGreyText border-[2px] rounded-[5px] py-4 px-6'>
          <div className={`grid grid-cols-5 ${fifthUnit ? "border-b-[2px] border-spGreyText pb-4" : ""}`} onClick={toggleFifthUnit}>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Unit</p>
              <p className="text-black font-medium text-xl leading-relaxed">PT 157216</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Size</p>
              <p className="text-black font-medium text-xl leading-relaxed">2,339 SQ FT</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Price</p>
              <p className="text-black font-medium text-xl leading-relaxed">RM 1,448,667.00</p>
            </div>
            <div>
              <p className="text-spGreyText text-lg leading-relaxed">Layout</p>
              <p className="text-black font-medium text-xl leading-relaxed">B1</p>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Street</p>
                <p className="text-black font-medium text-xl leading-relaxed">-</p>
              </div>
              <div className='text-spGreyText text-[50px]'>
                {fifthUnit ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
              </div>
            </div>
          </div>

          {fifthUnit && (
            <div className='grid grid-cols-[2fr_1fr_2fr_1fr] pt-4'>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Project</p>
                <p className="text-black font-medium text-xl leading-relaxed">03 CLUSTER-CASABLANCA 2</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Tenure</p>
                <p className="text-black font-medium text-xl leading-relaxed">Freehold</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Address</p>
                <p className="text-black font-medium text-xl leading-relaxed">No. 5 Jalan Hang Nadim 35/46B</p>
              </div>
              <div>
                <p className="text-spGreyText text-lg leading-relaxed">Bumi</p>
                <p className="text-black font-medium text-xl leading-relaxed">No</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}