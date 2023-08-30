import Header from '../../shared/Header';
import FeatureCards from './feature-cards';

const Features = ({ header, cards }) => {
  return (
    <div className="h-screen mx-auto w-10/12 py-24">
      <Header
        {...header}
        // title={'Key Features'}
      />
      {/* <FeatureCards cards={cards} /> */}
    </div>
  );
};

Features.defaultProps = {};

export default Features;
