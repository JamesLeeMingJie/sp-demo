import Header from '../../shared/Header';
import CollectionsCard from './collections-card';
import { useQuery } from 'react-query';
import { getButtons } from '../../../utils';

import { LiaChevronCircleRightSolid } from 'react-icons/lia';

const Collections = ({ header, cards, initialData }) => {
  const { data } = useQuery(['buttons'], getButtons, { initialData });

  return (
    <div className="h-fit pt-24">
      <div className='mx-auto w-10/12 flex sm:flex-col md:flex-row sm:items-start md:items-center justify-between sm:pb-12 md:pb-0'>
        <Header
          {...header}
        />

        {data?.forms[0].attributes.blocks[2].button === "red"
          ?
          <button className='md:ml-20 shadow-lg spButton-red'>
            View All
            <span className="text-[28px]">
              <LiaChevronCircleRightSolid />
            </span>
          </button>
          :
          <button className='bg-transparent h-fit text-sp border-sp border-2 p-4 rounded-[5px]'>
            View All &rarr;
          </button>}

      </div>
      <CollectionsCard cards={cards} />
    </div>
  )
}

Collections.defaultProps = {};

export default Collections;