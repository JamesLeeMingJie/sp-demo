import Image from 'next/image';
import Header from '../../shared/Header';

import { LiaChevronCircleRightSolid } from 'react-icons/lia';
import placeholderImage from '../../../public/assets/img/properties-placeholder.png'

const OtherProperties = ({ header }) => {
  return (
    <div className="h-screen py-24">
      <div className='mx-auto w-10/12 flex items-center justify-between'>
        <Header
          {...header}
        />
      </div>

      {/* OtherProperties Card component - to be built later */}
      <div className='mx-auto w-10/12 grid grid-cols-3 gap-x-8'>

        <div className='rounded-[5px]'>
          <div className='relative'>
            <div className='filledImage'>
              <Image src={placeholderImage} />
            </div>
            <div className='absolute bottom-[20px] left-[15px] text-white text-[18px] font-bold'>
              Temasya Legasi
            </div>
            <div className='absolute bottom-[20px] right-[15px] text-white'>
              <LiaChevronCircleRightSolid />
            </div>
          </div>
        </div>

        <div className='p-4 shadow-xl rounded-[5px]'>
          <div className='relative pb-4'>
            <div className='filledImage'>
              <Image src={placeholderImage} />
            </div>
            <div className='absolute top-[10px] right-[10px] p-2 text-white bg-sp rounded-[5px]'>
              FOR SALE
            </div>
          </div>
          <div className='text-black text-[24px] font-bold pb-4'>
            Casablanca 3
          </div>
          <p className='pb-4'>
            Setia AlamImpian is proud to present Casablanca 3, the 3rd release of the premium Cinematic Arts Precinct comprising only 12 units of Semi-Ds and 60 units of Cluster Homes.
          </p>
          <button className='text-lg'>
            <LiaChevronCircleRightSolid />
          </button>
        </div>
        <div className='p-4 shadow-xl rounded-[5px]'>
          <div className='relative pb-4'>
            <div className='filledImage'>
              <Image src={placeholderImage} />
            </div>
            <div className='absolute top-[10px] right-[10px] p-2 text-white bg-sp rounded-[5px]'>
              FOR SALE
            </div>
          </div>
          <div className='text-black text-[24px] font-bold pb-4'>
            Casablanca 3
          </div>
          <p className='pb-4'>
            Setia AlamImpian is proud to present Casablanca 3, the 3rd release of the premium Cinematic Arts Precinct comprising only 12 units of Semi-Ds and 60 units of Cluster Homes.
          </p>
          <button className='text-lg'>
            <LiaChevronCircleRightSolid />
          </button>
        </div>
      </div>

    </div>
  )
}

OtherProperties.defaultProps = {};

export default OtherProperties;