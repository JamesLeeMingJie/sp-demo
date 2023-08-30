import { useState } from "react";

import { IoChevronUpCircleSharp, IoChevronDownCircleSharp } from 'react-icons/io5';

export default function Specification() {

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
    <section className='py-24'>
      <div className='mx-auto w-10/12'>
        <p className="text-3xl text-sp pb-32 leading-8 font-extrabold sm:text-5xl">
          Property Specification
        </p>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16'>

          <div className='border-b-[2px] pt-8 min-h-[200px]'>
            <p className="text-black text-xl leading-relaxed">Structure</p>
            <p className="text-black font-bold text-2xl leading-relaxed w-8/12">Reinforced Concrete</p>
          </div>

          <div className='border-b-[2px] pt-8 min-h-[200px]'>
            <p className="text-black text-xl leading-relaxed">Wall</p>
            <p className="text-black font-bold text-2xl leading-tight w-8/12">Cement Sand Bricks / Clay Bricks(Party Wall)/ Vent Block</p>
          </div>

          <div className='border-b-[2px] pt-8 min-h-[200px]'>
            <p className="text-black text-xl leading-relaxed">Roof Covering</p>
            <p className="text-black font-bold text-2xl leading-relaxed w-8/12">Concrete Roof Tile / Glass Roof for Semi-D</p>
          </div>

          <div className='border-b-[2px] pt-8 min-h-[200px]'>
            <p className="text-black text-xl leading-relaxed">Roof Framing</p>
            <p className="text-black font-bold text-2xl leading-relaxed w-8/12 pb-8">Light Weight Steel Trusses/ MS Framing, RC Slab at Car Porch</p>
          </div>

          <div className='border-b-[2px] pt-8 min-h-[200px]'>
            <p className="text-black text-xl leading-relaxed">Ceiling</p>
            <p className="text-black font-bold text-2xl leading-relaxed w-8/12">Plaster Ceiling & Paint, Skim Coat & Paint</p>
          </div>

          <div className='border-b-[2px] pt-8 min-h-[200px]'>
            <p className="text-black text-xl leading-relaxed">Ironmongery</p>
            <p className="text-black font-bold text-2xl leading-relaxed w-8/12">Provided</p>
          </div>

          <div className='border-b-[2px] pt-8 min-h-[200px]'>
            <p className="text-black text-xl leading-relaxed">Internal Telecommunication Cabling</p>
            <p className="text-black font-bold text-2xl leading-relaxed w-8/12">Provided</p>
          </div>

          <div className='border-b-[2px] pt-8 min-h-[200px]'>
            <p className="text-black text-xl leading-relaxed">Fencing</p>
            <p className="text-black font-bold text-2xl leading-relaxed w-8/12">Provided</p>
          </div>

          <div className='border-b-[2px] pt-8 min-h-[200px]'>
            <p className="text-black text-xl leading-relaxed">Turfing</p>
            <p className="text-black font-bold text-2xl leading-relaxed w-8/12">Provided</p>
          </div>

          <div className='border-b-[2px] pt-8 min-h-[200px]'>
            <p className="text-black text-xl leading-relaxed">Rain Water Harvesting</p>
            <p className="text-black font-bold text-2xl leading-relaxed w-8/12">Provided (Semi-D only)</p>
          </div>

          <div className='border-b-[2px] pt-8 min-h-[200px]'>
            <p className="text-black text-xl leading-relaxed">Gas Piping</p>
            <p className="text-black font-bold text-2xl leading-relaxed w-8/12">Not provided</p>
          </div>

          <div className='border-b-[2px] pt-8 min-h-[200px]'>
            {/* <p className="text-black text-xl leading-relaxed">Fencing</p>
                <p className="text-black font-bold text-2xl leading-relaxed w-8/12">Provided</p> */}
          </div>

        </div>

        <div className='shadow-xl rounded-[5px]'>
          <div className={`flex justify-between px-8 py-12 ${windows ? "" : "border-b-[2px] border-spGreyText"} `} onClick={toggleWindows}>
            <p className="text-black font-bold text-2xl leading-relaxed">Windows</p>
            <div className='text-[50px] text-spGreyText'>
              {windows ? <IoChevronUpCircleSharp /> : <IoChevronDownCircleSharp />}
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
              {doors ? <IoChevronUpCircleSharp /> : <IoChevronDownCircleSharp />}
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
              {wall ? <IoChevronUpCircleSharp /> : <IoChevronDownCircleSharp />}
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
              {floor ? <IoChevronUpCircleSharp /> : <IoChevronDownCircleSharp />}
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
              {sanitary ? <IoChevronUpCircleSharp /> : <IoChevronDownCircleSharp />}
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
              {electrical ? <IoChevronUpCircleSharp /> : <IoChevronDownCircleSharp />}
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
  )
}