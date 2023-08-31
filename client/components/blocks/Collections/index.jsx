import Header from '../../shared/Header';
import CollectionsCard from './collections-card';

import { LiaChevronCircleRightSolid } from 'react-icons/lia';

const Collections = ({ header, cards }) => {
  return (
    <div className="h-fit pt-24">
      <div className='mx-auto w-10/12 flex sm:flex-col md:flex-row sm:items-start md:items-center justify-between sm:pb-12 md:pb-0'>
        <Header
          {...header}
        />
        <button className='md:ml-20 shadow-lg spButton-red'>
          View All
          <span className="text-[28px]">
            <LiaChevronCircleRightSolid />
          </span>
        </button>
      </div>
      <CollectionsCard cards={cards} />
    </div>
  )
}

Collections.defaultProps = {};

export default Collections;