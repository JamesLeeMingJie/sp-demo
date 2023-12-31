import Image from 'next/image';
import Header from '../../shared/Header';

import { LiaChevronCircleRightSolid } from 'react-icons/lia';
import placeholderImage from '../../../public/assets/img/news-image.png'

const NewsEvents = ({ header }) => {
  return (
    <div className="h-fit pt-24">
      <div className='mx-auto w-10/12 flex sm:flex-col md:flex-row sm:items-start md:items-center justify-between sm:pb-12 md:pb-0'>
        <Header
          {...header}
        />
        <button className='bg-transparent h-fit text-sp border-sp border-2 p-4 rounded-[5px]'>
          View All &rarr;
        </button>
      </div>

      {/* NewsEvents Card component - to be built later */}
      <div className='mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
            Mini Terrarium Workshop
          </div>
          <p className='pb-4'>
            Setia AlamImpian is proud to present Mini Terrarium Workshop, the 3rd release of the premium Cinematic Arts Precinct comprising only 12 units of Semi-Ds and 60 units of Cluster Homes.
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
            Mini Terrarium Workshop
          </div>
          <p className='pb-4'>
            Setia AlamImpian is proud to present Mini Terrarium Workshop, the 3rd release of the premium Cinematic Arts Precinct comprising only 12 units of Semi-Ds and 60 units of Cluster Homes.
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
            Mini Terrarium Workshop
          </div>
          <p className='pb-4'>
            Setia AlamImpian is proud to present Mini Terrarium Workshop, the 3rd release of the premium Cinematic Arts Precinct comprising only 12 units of Semi-Ds and 60 units of Cluster Homes.
          </p>
          <button className='text-lg'>
            <LiaChevronCircleRightSolid />
          </button>
        </div>
      </div>

    </div>
  )
}

NewsEvents.defaultProps = {};

export default NewsEvents;