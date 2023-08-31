import delve from 'dlv';
import { useState } from 'react';
import Image from 'next/image';

import Layout from "../../../components/layout";
import Floor from './floor';
import Specification from './specification';
import Unit from './unit';
import Location from './location';
import styles from '../../../css/Background.module.css';

// Assets
import floorIcon from '../../../public/assets/img/floor-icon.svg';
import specificationIcon from '../../../public/assets/img/specification-icon.svg';
import siteIcon from '../../../public/assets/img/site-icon.svg';
import locationIcon from '../../../public/assets/img/location-icon.svg';
import galleryIcon from '../../../public/assets/img/gallery-icon.svg';
import progressIcon from '../../../public/assets/img/progress-icon.svg';

import sitePlaceholder from '../../../public/assets/img/site-placeholder.png';

// React Icons
import { IoChevronForwardCircleOutline, IoChevronUpCircleSharp, IoChevronDownCircleSharp } from 'react-icons/io5';

export default function CollectionsPage({
  global,
  initialData,
  pageData,
  categories,
  locale,
  perPage,
  preview,
}) {
  const blocks = delve(pageData, "attributes.blocks");
  const header = delve(pageData, "attributes.header");
  const title = delve(header, 'title');

  const [tabs, setTabs] = useState('floor');

  return (
    <Layout
      global={global}
      pageData={pageData}
      type="blog-page"
      preview={preview}
    >
      <section
        className={`text-gray-600 body-font h-screen ${styles.homeBackground} flex justify-center items-center`}
      >
        <div className="container flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 my-12 lg:pl-24 md:pl-16 md:mx-auto flex flex-col md:items-start md:text-left items-center text-center">
            {title && (
              <h1 className="title-font lg:text-6xl text-5xl mb-4 font-black text-white">
                {/* {title} */}
                Welcome to Setia Alam Impian
              </h1>
            )}

            {/* {text && ( */}
            <p className="mb-8 px-2 text-white leading-relaxed">
              {/* {text} */}
              Come home to township that fuses artistic expression and modern
              day amenities
            </p>
            {/* )} */}

            <button className="bg-white text-spRed font-extrabold tracking-wider text-[18px] rounded-[30px] px-4 py-2">
              Register &rarr;
            </button>

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
      <section>
        <div className='grid grid-cols-7'>
          <div className={`${tabs === 'floor' ? "bg-sp text-white" : "bg-spGreyBg text-spGreyText"} py-4 cursor-pointer text-center`} onClick={() => { setTabs('floor') }}>
            <Image src={floorIcon} />
            <p>Floor Plan</p>
          </div>
          <div className={`${tabs === 'specification' ? "bg-sp text-white" : "bg-spGreyBg text-spGreyText"} py-4 cursor-pointer text-center`} onClick={() => { setTabs('specification') }}>
            <Image src={specificationIcon} />
            <p>Specification</p>
          </div>
          <div className={`${tabs === 'site' ? "bg-sp text-white" : "bg-spGreyBg text-spGreyText"} py-4 cursor-pointer text-center`} onClick={() => { setTabs('site') }}>
            <Image src={siteIcon} />
            <p>Site Plan</p>
          </div>
          <div className={`${tabs === 'unit' ? "bg-sp text-white" : "bg-spGreyBg text-spGreyText"} py-4 cursor-pointer text-center`} onClick={() => { setTabs('unit') }}>
            <Image src={siteIcon} />
            <p>Unit</p>
          </div>
          <div className={`${tabs === 'location' ? "bg-sp text-white" : "bg-spGreyBg text-spGreyText"} py-4 cursor-pointer text-center`} onClick={() => { setTabs('location') }}>
            <Image src={locationIcon} />
            <p>Location</p>
          </div>
          <div className={`${tabs === 'gallery' ? "bg-sp text-white" : "bg-spGreyBg text-spGreyText"} py-4 cursor-pointer text-center`} onClick={() => { setTabs('gallery') }}>
            <Image src={galleryIcon} />
            <p>Gallery</p>
          </div>
          <div className={`${tabs === 'progress' ? "bg-sp text-white" : "bg-spGreyBg text-spGreyText"} py-4 cursor-pointer text-center`} onClick={() => { setTabs('progress') }}>
            <Image src={progressIcon} />
            <p>Progress</p>
          </div>
        </div>
      </section>

      {/* Floor section */}
      {tabs === "floor" &&
        <Floor />
      }

      {tabs === "specification" &&
        <Specification />
      }

      {tabs === "site" && (
        <section className='py-24'>
          <div className='mx-auto w-10/12 flex'>
            <div>
              <p className="text-3xl text-sp pb-8 leading-8 font-extrabold sm:text-5xl">
                Site Plan
              </p>
              <div className='flex gap-x-8 text-spRed text-[20px] font-bold'>
                <div className='flex gap-x-2 items-center'>
                  Download e-Brochure <span className='text-[30px]'><IoChevronForwardCircleOutline /></span>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <div className='mx-auto w-7/12 shadow-xl rounded-[10px] mt-20'>
                <Image src={sitePlaceholder} />
              </div>
            </div>
          </div>
        </section>
      )}

      {tabs === 'unit' && (
        <Unit />
      )}

      {tabs === 'location' && (
        <Location />
      )}

      {tabs === 'progress' && (
        <section className={`py-24 h-screen relative ${styles.siteBackground}`}>
          <div className='mx-auto w-10/12'>
            <div>
              <p className="text-3xl text-center text-sp pb-4 leading-8 font-extrabold sm:text-5xl">
                Site Plan
              </p>
              <p className="text-black text-center text-2xl leading-relaxed">Site progress photos are updated every two months</p>
            </div>

            <p className="absolute top-[50%] left-[50%] translate-x-[-50%] w-10/12 text-black text-center font-bold text-2xl leading-relaxed">Due to recently launch progress will be updated soon. <br /> Thank you.</p>
          </div>
        </section>
      )}

    </Layout>
  )
}