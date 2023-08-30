import Header from '../../shared/Header';
import CollectionsCard from './collections-card';

const Collections = ({ header, cards }) => {
  return (
    <div className="h-fit pt-24">
      <div className='mx-auto w-10/12 flex items-center justify-between'>
        <Header
          {...header}
        />
        <button className='bg-transparent h-fit text-sp border-sp border-2 p-4 rounded-[5px]'>
          View All &rarr;
        </button>
      </div>

      {/* {console.log(header)} */}

      <CollectionsCard cards={cards} />

    </div>
  )
}

Collections.defaultProps = {};

export default Collections;