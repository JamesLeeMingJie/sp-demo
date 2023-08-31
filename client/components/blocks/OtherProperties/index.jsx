import Image from 'next/image';
import Header from '../../shared/Header';

import { LiaChevronCircleRightSolid } from 'react-icons/lia';
import placeholderImage from '../../../public/assets/img/properties-placeholder.png'

const OtherProperties = ({ header }) => {
  return (
    <div className="h-fit py-24">
      <div className='mx-auto w-10/12 flex items-center justify-between'>
        <Header
          {...header}
        />
      </div>

      {/* OtherProperties Card component - to be built later */}
      <div className='mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        <div className='rounded-[5px]'>
          <div className='relative'>
            <div className='filledImage'>
              <Image src={placeholderImage} />
            </div>
            <div className='absolute bottom-[20px] left-[15px] text-white text-[20px] font-bold'>
              Temasya Legasi
            </div>
            <div className='absolute bottom-[20px] right-[15px] text-white'>
              <LiaChevronCircleRightSolid />
            </div>
          </div>
        </div>

        <div className='rounded-[5px]'>
          <div className='relative'>
            <div className='filledImage'>
              <Image src={placeholderImage} />
            </div>
            <div className='absolute bottom-[20px] left-[15px] text-white text-[20px] font-bold'>
              Temasya Legasi
            </div>
            <div className='absolute bottom-[20px] right-[15px] text-white'>
              <LiaChevronCircleRightSolid />
            </div>
          </div>
        </div>

        <div className='rounded-[5px]'>
          <div className='relative'>
            <div className='filledImage'>
              <Image src={placeholderImage} />
            </div>
            <div className='absolute bottom-[20px] left-[15px] text-white text-[20px] font-bold'>
              Temasya Legasi
            </div>
            <div className='absolute bottom-[20px] right-[15px] text-white'>
              <LiaChevronCircleRightSolid />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

OtherProperties.defaultProps = {};

export default OtherProperties;