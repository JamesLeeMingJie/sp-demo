import Image from 'next/image';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';
import floorPlaceholderImage from '../../../public/assets/img/floor-placeholder-image.png';

export default function Floor() {
  return (
    <section className='py-24'>
      <div className='mx-auto w-10/12 flex sm:flex-col md:flex-row gap-20'>
        <div className='flex-1'>
          <p className="text-3xl text-sp pb-8 leading-8 font-extrabold sm:text-5xl">
            Floor Plan
          </p>

          <p className="text-black font-bold text-3xl leading-relaxed">Type A Ground Floor</p>
          <p className="text-black pb-8 font-semibold text-xl leading-relaxed">Semi-D</p>

          <ul className="list-disc text-black pl-8 pb-8 leading-relaxed">
            <li>
              Lot Size: <span className='font-bold'>50' x 70'</span>
            </li>
            <li>
              Built-Up Area: <span className='font-bold'>3,048 sq.ft</span>
            </li>
          </ul>

          <div className='flex gap-x-8 text-spRed text-[20px] font-bold'>
            <div className='flex gap-x-2 items-center'>
              Download e-Brochure <span className='text-[30px]'><IoChevronForwardCircleOutline /></span>
            </div>
            <div className='flex gap-x-2 items-center'>
              Monthly Payment Calculator <span className='text-[30px]'><IoChevronForwardCircleOutline /></span>
            </div>
          </div>

        </div>
        <div className='flex-1'>
          <div className='mx-auto w-fit shadow-xl rounded-[10px]'>
            <Image src={floorPlaceholderImage} />
          </div>
        </div>
      </div>
    </section>
  )
}