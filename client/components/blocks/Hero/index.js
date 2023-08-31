import delve from 'dlv';
import CustomLink from '../../shared/CustomLink';
import ImageCards from './image-cards';

import Image from 'next/image';
import styles from '../../../css/Background.module.css';
import placeholderImage from '../../../public/assets/img/sp-placeholder.jpg';

import { LiaChevronCircleRightSolid } from 'react-icons/lia';

const Hero = ({ images, header, text, buttons }) => {
  const title = delve(header, 'title');

  return (
    <section
      className={`text-gray-600 body-font h-screen ${styles.homeBackground} flex justify-center items-center`}
    >
      <div className="container grid md:grid-cols-2 items-center w-10/12 mx-auto">
        <div className="lg:flex-grow my-12 md:mx-auto flex flex-col md:items-start md:text-left items-center text-center">
          {/* {title && ( */}
            <h1 className="title-font lg:text-6xl text-5xl mb-4 font-black text-white">
              {/* {title} */}
              Welcome to Setia Alam Impian
            </h1>
          {/* )} */}

          {text && (
            <p className="mb-8 px-2 text-white leading-relaxed">
              {/* {text} */}
              Come home to township that fuses artistic expression and modern
              day amenities
            </p>
          )}

          <div className='spButton-red'>
            Register
            <span className="text-[28px]">
              <LiaChevronCircleRightSolid />
            </span>
          </div>

          {/* <div className="block space-y-3 md:flex md:space-y-0 space-x-2">
            {buttons &&
              buttons.map((button, index) => (
                <button
                  key={`heroButton-${index}`}
                  className={`inline-block text-${delve(
                    button,
                    'theme'
                  )}-text bg-${delve(
                    button,
                    'theme'
                  )} border-0 py-2 px-6 focus:outline-none hover:bg-${delve(
                    button,
                    'theme'
                  )}-darker rounded-full shadow-md hover:shadow-md text-lg`}
                >
                  <CustomLink {...delve(button, 'link')} />
                </button>
              ))}
          </div> */}
        </div>
        <div className="mt-4 relative relative-20 lg:mt-0 lg:col-start-1">
          {/* <Image
            // images={images}
            src={placeholderImage}
          /> */}
        </div>
      </div>
    </section>
  );
};

Hero.defaultProps = {};

export default Hero;
