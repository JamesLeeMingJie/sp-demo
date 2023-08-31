import Header from '../../shared/Header';
import FeatureCards from './feature-cards';
import Image from 'next/image';

import featurePlaceholder from '../../../public/assets/img/features-placeholder.png';
import { useState } from 'react';

const Features = ({ header, cards }) => {
  const [feature1, setFeature1] = useState(true);
  const [feature2, setFeature2] = useState(false);
  const [feature3, setFeature3] = useState(false);

  const toggleFeature1 = () => {
    setFeature1(true);
    setFeature2(false);
    setFeature3(false);
  };

  const toggleFeature2 = () => {
    setFeature1(false);
    setFeature2(true);
    setFeature3(false);
  };

  const toggleFeature3 = () => {
    setFeature1(false);
    setFeature2(false);
    setFeature3(true);
  };

  return (
    <div className="h-fit mx-auto w-10/12 pt-24">
      <Header
        {...header}
        // title={'Key Features'}
      />
      {/* <FeatureCards cards={cards} /> */}

      <section>
        <div className='mx-auto md:w-11/12'>
          <div className="shadow-xl rounded-[5px] grid sm:grid-cols-1 lg:grid-cols-2 gap-x-12 p-8">
            <div className="sm:pb-8 lg:pb-0">
              <div
                className={`shadow-xl ${
                  feature1 ? 'text-white bg-sp' : 'text-black bg-white'
                } rounded-[5px] p-4 mb-4 cursor-pointer`}
                onClick={toggleFeature1}
              >
                <p className="mb-4 font-medium leading-relaxed">
                  LakePoint - LakePoint Club & LakePoint Gallerie
                </p>
                <p className="mb-2 leading-relaxed">
                  The new LakePoint Gallerie & LakePoint Club in Setia
                  AlamImpian, Shah Alam
                </p>
              </div>
              <div
                className={`shadow-xl ${
                  feature2 ? 'text-white bg-sp' : 'text-black bg-white'
                } rounded-[5px] p-4 mb-4 cursor-pointer`}
                onClick={toggleFeature2}
              >
                <p className="mb-4 font-medium leading-relaxed">
                  LakePoint - LakePoint Club & LakePoint Gallerie
                </p>
                <p className="mb-2 leading-relaxed">
                  The new LakePoint Gallerie & LakePoint Club in Setia
                  AlamImpian, Shah Alam
                </p>
              </div>
              <div
                className={`shadow-xl ${
                  feature3 ? 'text-white bg-sp' : 'text-black bg-white'
                } rounded-[5px] p-4 cursor-pointer`}
                onClick={toggleFeature3}
              >
                <p className="mb-4 font-medium leading-relaxed">
                  LakePoint - LakePoint Club & LakePoint Gallerie
                </p>
                <p className="mb-2 leading-relaxed">
                  The new LakePoint Gallerie & LakePoint Club in Setia
                  AlamImpian, Shah Alam
                </p>
              </div>
            </div>
            <div className="filledImage">
              <Image src={featurePlaceholder} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Features.defaultProps = {};

export default Features;
