import Image from 'next/image';
import Header from '../../shared/Header';

import placeholderImage from '../../../public/assets/img/master-plan.jpg';

export default function MasterPlan({ header }) {
  return (
    <div className="h-screen py-24">
      <div className='mx-auto w-10/12 flex gap-x-40'>
        <div className='w-5/12'>
          <Header
            {...header}
          />
          <button className='bg-transparent h-fit text-sp border-sp border-2 p-4 rounded-[5px]'>
            View All &rarr;
          </button>
        </div>
        <div className='w-7/12'>
          <Image width={600} height={600} src={placeholderImage} />
        </div>
      </div>
    </div>
  )
}