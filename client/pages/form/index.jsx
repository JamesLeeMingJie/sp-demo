import { useState } from "react";
import Layout from "../../components/layout";
import { useQuery } from 'react-query';
import { getForms } from '../../utils';

import styles from '../../css/Background.module.css';

import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
import { LiaChevronCircleRightSolid } from 'react-icons/lia';

export default function Form({ global, pageData, preview, initialData }) {
  const { data } = useQuery(['forms'], getForms, { initialData });

  // Post data
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [township, setTownship] = useState('');
  const [collections, setCollections] = useState('');

  const inputNames = {
    name: name,
    phone: phone,
    email: email,
    country: country,
    township: township,
    collections: collections
  }

  const [input1, setinput1] = useState(false);
  const toggleInput1 = () => {
    setinput1(!input1)
  };

  const [input2, setinput2] = useState(false);
  const toggleInput2 = () => {
    setinput2(!input2)
  };

  const [input3, setinput3] = useState(false);
  const toggleInput3 = () => {
    setinput3(!input3)
  };

  const [input4, setinput4] = useState(false);
  const toggleInput4 = () => {
    setinput4(!input4)
  };

  const [input5, setinput5] = useState(false);
  const toggleInput5 = () => {
    setinput5(!input5)
  };

  const [input6, setinput6] = useState(false);
  const toggleInput6 = () => {
    setinput6(!input6)
  };

  const checkSetter = (item) => {
    if (item.attributes.title === "Name") {
      return setName;
    } else if (item.attributes.title === "Phone") {
      return setPhone;
    } else if (item.attributes.title === "Email") {
      return setEmail;
    } else if (item.attributes.title === "Nationality") {
      return setCountry;
    } else if (item.attributes.title === "Township") {
      return setTownship;
    } else if (item.attributes.title === "Collections") {
      return setCollections;
    }
  }

  function InputTag({ input }) {
    return (
      <div className={`border-b-[2px] ${input.attributes.inputNumber ? "border-sp" : "border-spGreyText"} `}>
        <p className='text-black font-bold'>
          {input.attributes.title}
        </p>
        <div className='flex'>
          <input
            value={inputNames[input.attributes.title.toLowerCase()]}
            onChange={(e) => (checkSetter(input))(e.target.value)}
            onFocus={window[input.attributes.inputMethod]}
            onBlur={window[input.attributes.inputNumber]}
            class={`appearance-none bg-transparent border-none w-full ${input.attributes.inputNumber ? "text-sp placeholder-sp" : "text-spGreyText"} mr-3 py-2 leading-tight focus:outline-none`}
            type="text"
            placeholder={input.attributes.placeholder} />
        </div>
      </div>
    )
  }

  function SelectTag({ input }) {
    return (
      <div className={`border-b-[2px] ${input.attributes.inputNumber ? "border-sp" : "border-spGreyText"} `}>
        <p className='text-black font-bold'>
          {input.attributes.title}
        </p>
        <div className='flex'>
          <select
            value={inputNames[input.attributes.title.toLowerCase()]}
            onChange={(e) => setCountry(e.target.value)}
            onFocus={window[input.attributes.inputMethod]}
            onBlur={window[input.attributes.inputMethod]}
            class={`appearance-none bg-transparent border-none w-full ${input.attributes.inputNumber ? "text-sp placeholder-sp" : "text-spGreyText"} mr-3 py-2 leading-tight focus:outline-none`}
            type="text">
            <option value={`${input.attributes.placeholder}`}>{input.attributes.placeholder}</option>
          </select>
        </div>
      </div>
    )
  }

  return (
    <Layout
      global={global}
      pageData={pageData}
      type="blog-page"
      preview={preview}
    >
      <section className="h-[70vh]">
        <div className={`${styles.formBackground} h-full`}></div>
      </section>

      <div className='pt-24'>
        <p className="w-10/12 mx-auto text-3xl text-center text-sp pb-4 font-bold sm:text-[3rem] leading-tight">
          Register your interest!
        </p>
        <p className="w-10/12 mx-auto text-black text-center pb-12 text-xl leading-relaxed">Get in touch to learn more about our latest developments.</p>

        <div className='sm:w-10/12 md:w-8/12 mx-auto'>
          <form action="" method="post">
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 pb-8'>

              {data?.forms.map(function (input) {
                if (input.attributes.isInput === true) {
                  return (
                    <InputTag input={input} />
                  )
                } else {
                  return (
                    <SelectTag input={input} />
                  )
                }
              })}

              {/* <span className="text-spGreyText text-[24px]"><CiUser /></span> */}

              {/* Phone input */}
              {/* <div className={`border-b-[2px] ${input2 ? "border-sp" : "border-spGreyText"} `}>
                <p className='text-black font-bold'>
                  Phone
                </p>
                <div className='flex'>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} onFocus={toggleInput2} onBlur={toggleInput2} class={`appearance-none bg-transparent border-none w-full ${input2 ? "text-sp placeholder-sp" : "text-spGreyText"} mr-3 py-2 leading-tight focus:outline-none`} type="text" placeholder="Enter your phone no." />
                  <span className="text-spGreyText text-[24px]"><BsTelephone /></span>
                </div>
              </div>

              <div className={`border-b-[2px] ${input3 ? "border-sp" : "border-spGreyText"} `}>
                <p className='text-black font-bold'>
                  Email
                </p>
                <div className='flex'>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} onFocus={toggleInput3} onBlur={toggleInput3} class={`appearance-none bg-transparent border-none w-full ${input3 ? "text-sp placeholder-sp" : "text-spGreyText"} mr-3 py-2 leading-tight focus:outline-none`} type="text" placeholder="Enter your email" />
                  <span className="text-spGreyText text-[24px]"><AiOutlineMail /></span>
                </div>
              </div> */}

              {/* <div className={`border-b-[2px] ${input5 ? "border-sp" : "border-spGreyText"} `}>
                <p className='text-black font-bold'>
                  Township
                </p>
                <div className='flex'>
                  <select value={township} onChange={(e) => setTownship(e.target.value)} onFocus={toggleInput5} onBlur={toggleInput5} class={`appearance-none bg-transparent border-none w-full ${input5 ? "text-sp placeholder-sp" : "text-spGreyText"} mr-3 py-2 leading-tight focus:outline-none`} type="text">
                    <option value="Setia AlamImpian">Setia AlamImpian</option>
                  </select>
                </div>
              </div>

              <div className={`border-b-[2px] ${input6 ? "border-sp" : "border-spGreyText"} `}>
                <p className='text-black font-bold'>
                  Collections
                </p>
                <div className='flex'>
                  <select value={collections} onChange={(e) => setCollections(e.target.value)} onFocus={toggleInput6} onBlur={toggleInput6} class={`appearance-none bg-transparent border-none w-full ${input6 ? "text-sp placeholder-sp" : "text-spGreyText"} mr-3 py-2 leading-tight focus:outline-none`} type="text">
                    <option value="">Products</option>
                  </select>
                </div>
              </div> */}

            </div>
            <button className='shadow-lg w-fit spButton-red'>
              Submit
              <span className="text-[28px]">
                <LiaChevronCircleRightSolid />
              </span>
            </button>
          </form>
        </div>
      </div>

    </Layout>
  )
}