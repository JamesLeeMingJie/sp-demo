import Image from 'next/image';
import Header from '../../shared/Header';

import placeholderImage from '../../../public/assets/img/master-plan.jpg';

import { LiaChevronCircleRightSolid } from 'react-icons/lia';

export default function MasterPlan({ header }) {
  return (
    <div className="h-fit pt-24">
      <div className='mx-auto w-10/12 flex sm:flex-col md:flex-row gap-x-40'>
        <div className='md:w-5/12 sm:pb-12 md:pb-0'>
          <Header
            {...header}
          />

          <button className='shadow-lg spButton-red'>
            View All
            <span className="text-[28px]">
              <LiaChevronCircleRightSolid />
            </span>
          </button>
          {/* <button className='bg-transparent h-fit text-sp border-sp border-2 p-4 rounded-[5px]'>
            View All &rarr;
          </button> */}
        </div>
        <div className='md:w-7/12'>
          <Image width={600} height={600} src={placeholderImage} />
        </div>
      </div>
    </div>
  )
}