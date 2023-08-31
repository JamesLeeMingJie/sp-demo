import Image from 'next/image';
import { useQuery } from 'react-query';
import { getProducts } from '../../../utils';

import { FaCircleChevronRight } from 'react-icons/fa6';
import placeholderImage from '../../../public/assets/img/collections-image.png'

export default function CollectionsCard({ cards, initialData }) {
  const { data } = useQuery(['products'], getProducts, { initialData });

  return (
    <div className='mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8'>
      {data?.products.map(function (product) {
        return (
          <a key={product.id} href={`/collections/${product.id}`}>
            <div className='p-4 shadow-xl h-full rounded-[5px]'>
              <div className='relative pb-4'>
                <div className='filledImage'>
                  <Image src={placeholderImage} />
                </div>
                <div className='absolute top-[10px] left-[10px] px-8 py-[2px] text-white bg-sp rounded-[15px]'>
                  {product.attributes.availability ? "Available Units" : ""}
                </div>
              </div>
              <div className='text-black text-[24px] font-bold pb-4 px-2'>
                {product.attributes.title}
              </div>
              <p className='pb-4 px-2'>
                {product.attributes.description}
              </p>
              <button className='text-[40px] text-spGreyText text-right w-full flex justify-end px-2'>
                <FaCircleChevronRight />
              </button>
            </div>
          </a>
        )
      })}

      {/* <div className='p-4 shadow-xl rounded-[5px]'>
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
      </div> */}

    </div >
  )
}