import delve from 'dlv';
import { useState } from 'react';
import Image from 'next/image';

import Layout from "../../../components/layout";
import styles from '../../../css/Background.module.css';

// Assets
import floorIcon from '../../../public/assets/img/floor-icon.svg';
import floorPlaceholderImage from '../../../public/assets/img/floor-placeholder-image.png';

import specificationIcon from '../../../public/assets/img/specification-icon.svg';
import siteIcon from '../../../public/assets/img/site-icon.svg';
import locationIcon from '../../../public/assets/img/location-icon.svg';
import galleryIcon from '../../../public/assets/img/gallery-icon.svg';
import progressIcon from '../../../public/assets/img/progress-icon.svg';

// React Icons
import { IoChevronUpCircleSharp, IoChevronForwardCircleOutline } from 'react-icons/io5';

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

  // Collapsibles
  const [windows, setWindows] = useState(false);
  const toggleWindows = () => {
    setWindows(!windows);
  };

  const [doors, setDoors] = useState(false);
  const toggleDoors = () => {
    setDoors(!doors);
  };

  const [wall, setWall] = useState(false);
  const toggleWall = () => {
    setWall(!wall);
  };

  const [floor, setFloor] = useState(false);
  const toggleFloor = () => {
    setFloor(!floor);
  };

  const [sanitary, setSanitary] = useState(false);
  const toggleSanitary = () => {
    setSanitary(!sanitary);
  };

  const [electrical, setElectrical] = useState(false);
  const toggleElectrical = () => {
    setElectrical(!electrical);
  };


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
        <div className='grid grid-cols-6'>
          <div className={`${tabs === 'floor' ? "bg-sp text-white" : "bg-spGreyBg text-spGreyText"} py-4 cursor-pointer text-center`} onClick={() => { setTabs('floor') }}>
            <Image src={floorIcon} />
            <p>Floor Plan</p>
          </div>
          <div className={`${tabs === 'specification' ? "bg-sp" : "bg-spGreyBg text-spGreyText"} py-4 cursor-pointer text-white text-center`} onClick={() => { setTabs('specification') }}>
            <Image src={specificationIcon} />
            <p>Specification</p>
          </div>
          <div className={`${tabs === 'site' ? "bg-sp" : "bg-spGreyBg text-spGreyText"} py-4 cursor-pointer text-white text-center`} onClick={() => { setTabs('site') }}>
            <Image src={siteIcon} />
            <p>Site Plan</p>
          </div>
          <div className={`${tabs === 'location' ? "bg-sp" : "bg-spGreyBg text-spGreyText"} py-4 cursor-pointer text-white text-center`} onClick={() => { setTabs('location') }}>
            <Image src={locationIcon} />
            <p>Location</p>
          </div>
          <div className={`${tabs === 'gallery' ? "bg-sp" : "bg-spGreyBg text-spGreyText"} py-4 cursor-pointer text-white text-center`} onClick={() => { setTabs('gallery') }}>
            <Image src={galleryIcon} />
            <p>Gallery</p>
          </div>
          <div className={`${tabs === 'progress' ? "bg-sp" : "bg-spGreyBg text-spGreyText"} py-4 cursor-pointer text-white text-center`} onClick={() => { setTabs('progress') }}>
            <Image src={progressIcon} />
            <p>Progress</p>
          </div>
        </div>
      </section>

      {/* Floor section */}
      {tabs === "floor" &&
        <section className='py-24'>
          <div className='mx-auto w-10/12 flex'>
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
        </section>}

      {tabs === "specification" &&
        <section className='py-24'>
          <div className='mx-auto w-10/12'>
            <p className="text-3xl text-sp pb-32 leading-8 font-extrabold sm:text-5xl">
              Property Specification
            </p>

            <div className='grid grid-cols-3 pb-16'>

              <div className='border-b-[2px] pt-8 h-[200px]'>
                <p className="text-black text-xl leading-relaxed">Structure</p>
                <p className="text-black font-bold text-2xl leading-relaxed w-7/12">Reinforced Concrete</p>
              </div>

              <div className='border-b-[2px] pt-8 h-[200px]'>
                <p className="text-black text-xl leading-relaxed">Wall</p>
                <p className="text-black font-bold text-2xl leading-tight w-7/12">Cement Sand Bricks / Clay Bricks(Party Wall)/ Vent Block</p>
              </div>

              <div className='border-b-[2px] pt-8 h-[200px]'>
                <p className="text-black text-xl leading-relaxed">Roof Covering</p>
                <p className="text-black font-bold text-2xl leading-relaxed w-7/12">Concrete Roof Tile / Glass Roof for Semi-D</p>
              </div>

              <div className='border-b-[2px] pt-8 h-[200px]'>
                <p className="text-black text-xl leading-relaxed">Roof Framing</p>
                <p className="text-black font-bold text-2xl leading-relaxed w-7/12 pb-8">Light Weight Steel Trusses/ MS Framing, RC Slab at Car Porch</p>
              </div>

              <div className='border-b-[2px] pt-8 h-[200px]'>
                <p className="text-black text-xl leading-relaxed">Ceiling</p>
                <p className="text-black font-bold text-2xl leading-relaxed w-7/12">Plaster Ceiling & Paint, Skim Coat & Paint</p>
              </div>

              <div className='border-b-[2px] pt-8 h-[200px]'>
                <p className="text-black text-xl leading-relaxed">Ironmongery</p>
                <p className="text-black font-bold text-2xl leading-relaxed w-7/12">Provided</p>
              </div>

              <div className='border-b-[2px] pt-8 h-[200px]'>
                <p className="text-black text-xl leading-relaxed">Internal Telecommunication Cabling</p>
                <p className="text-black font-bold text-2xl leading-relaxed w-7/12">Provided</p>
              </div>

              <div className='border-b-[2px] pt-8 h-[200px]'>
                <p className="text-black text-xl leading-relaxed">Fencing</p>
                <p className="text-black font-bold text-2xl leading-relaxed w-7/12">Provided</p>
              </div>

              <div className='border-b-[2px] pt-8 h-[200px]'>
                <p className="text-black text-xl leading-relaxed">Turfing</p>
                <p className="text-black font-bold text-2xl leading-relaxed w-7/12">Provided</p>
              </div>

              <div className='border-b-[2px] pt-8 h-[200px]'>
                <p className="text-black text-xl leading-relaxed">Rain Water Harvesting</p>
                <p className="text-black font-bold text-2xl leading-relaxed w-7/12">Provided (Semi-D only)</p>
              </div>

              <div className='border-b-[2px] pt-8 h-[200px]'>
                <p className="text-black text-xl leading-relaxed">Gas Piping</p>
                <p className="text-black font-bold text-2xl leading-relaxed w-7/12">Not provided</p>
              </div>

              <div className='border-b-[2px] pt-8 h-[200px]'>
                {/* <p className="text-black text-xl leading-relaxed">Fencing</p>
                <p className="text-black font-bold text-2xl leading-relaxed w-7/12">Provided</p> */}
              </div>

            </div>

            <div className='shadow-xl rounded-[5px]'>
              <div className={`flex justify-between px-8 py-12 ${windows ? "" : "border-b-[2px] border-spGreyText"} `} onClick={toggleWindows}>
                <p className="text-black font-bold text-2xl leading-relaxed">Windows</p>
                <div className='text-[50px] text-spGreyText'>
                  <IoChevronUpCircleSharp />
                </div>
              </div>

              {windows && (
                <div className='bg-spGreyBg flex px-12 py-8 justify-between border-b-[2px] border-spGreyText'>
                  <p className="text-black font-medium text-xl leading-relaxed">All Areas</p>
                  <div className='w-4/12 text-right text-xl'>
                    Aluminum Frame Casement, Aluminium Frame Fixed Glass, Aluminum Frame Overlap Glass, Aluminium Frame Sliding Glass(Cluster Only), Aluminium Frame Top Hung
                  </div>
                </div>
              )}

              <div className={`flex justify-between px-8 py-12 ${doors ? "" : "border-b-[2px] border-spGreyText"}`} onClick={toggleDoors}>
                <p className="text-black font-bold text-2xl leading-relaxed">Doors</p>
                <div className='text-[50px] text-spGreyText'>
                  <IoChevronUpCircleSharp />
                </div>
              </div>

              {doors && (
                <div className='bg-spGreyBg flex px-12 py-8 justify-between border-b-[2px] border-spGreyText'>
                  <p className="text-black font-medium text-xl leading-relaxed">All Areas</p>
                  <div className='w-4/12 text-right text-xl'>
                    Aluminum Frame Casement, Aluminium Frame Fixed Glass, Aluminum Frame Overlap Glass, Aluminium Frame Sliding Glass(Cluster Only), Aluminium Frame Top Hung
                  </div>
                </div>
              )}

              <div className={`flex justify-between px-8 py-12 ${wall ? "" : "border-b-[2px] border-spGreyText"}`} onClick={toggleWall}>
                <p className="text-black font-bold text-2xl leading-relaxed">Wall Finishes</p>
                <div className='text-[50px] text-spGreyText'>
                  <IoChevronUpCircleSharp />
                </div>
              </div>

              {wall && (
                <div className='bg-spGreyBg flex px-12 py-8 justify-between border-b-[2px] border-spGreyText'>
                  <p className="text-black font-medium text-xl leading-relaxed">All Areas</p>
                  <div className='w-4/12 text-right text-xl'>
                    Aluminum Frame Casement, Aluminium Frame Fixed Glass, Aluminum Frame Overlap Glass, Aluminium Frame Sliding Glass(Cluster Only), Aluminium Frame Top Hung
                  </div>
                </div>
              )}

              <div className={`flex justify-between px-8 py-12 ${floor ? "" : "border-b-[2px] border-spGreyText"}`} onClick={toggleFloor}>
                <p className="text-black font-bold text-2xl leading-relaxed">Floor Finishes</p>
                <div className='text-[50px] text-spGreyText'>
                  <IoChevronUpCircleSharp />
                </div>
              </div>

              {floor && (
                <div className='bg-spGreyBg flex px-12 py-8 justify-between border-b-[2px] border-spGreyText'>
                  <p className="text-black font-medium text-xl leading-relaxed">All Areas</p>
                  <div className='w-4/12 text-right text-xl'>
                    Aluminum Frame Casement, Aluminium Frame Fixed Glass, Aluminum Frame Overlap Glass, Aluminium Frame Sliding Glass(Cluster Only), Aluminium Frame Top Hung
                  </div>
                </div>
              )}

              <div className={`flex justify-between px-8 py-12 ${sanitary ? "" : "border-b-[2px] border-spGreyText"}`} onClick={toggleSanitary}>
                <p className="text-black font-bold text-2xl leading-relaxed">Sanitary & Plumbing Fittings</p>
                <div className='text-[50px] text-spGreyText'>
                  <IoChevronUpCircleSharp />
                </div>
              </div>

              {sanitary && (
                <div className='bg-spGreyBg flex px-12 py-8 justify-between border-b-[2px] border-spGreyText'>
                  <p className="text-black font-medium text-xl leading-relaxed">All Areas</p>
                  <div className='w-4/12 text-right text-xl'>
                    Aluminum Frame Casement, Aluminium Frame Fixed Glass, Aluminum Frame Overlap Glass, Aluminium Frame Sliding Glass(Cluster Only), Aluminium Frame Top Hung
                  </div>
                </div>
              )}

              <div className={`flex justify-between px-8 py-12 ${electrical ? "" : "border-b-[2px] border-spGreyText"}`} onClick={toggleElectrical}>
                <p className="text-black font-bold text-2xl leading-relaxed">Electrical Installation</p>
                <div className='text-[50px] text-spGreyText'>
                  <IoChevronUpCircleSharp />
                </div>
              </div>

              {electrical && (
                <div className='bg-spGreyBg flex px-12 py-8 justify-between border-b-[2px] border-spGreyText'>
                  <p className="text-black font-medium text-xl leading-relaxed">All Areas</p>
                  <div className='w-4/12 text-right text-xl'>
                    Aluminum Frame Casement, Aluminium Frame Fixed Glass, Aluminum Frame Overlap Glass, Aluminium Frame Sliding Glass(Cluster Only), Aluminium Frame Top Hung
                  </div>
                </div>
              )}

            </div>

          </div>
        </section>
      }

    </Layout>
  )
}