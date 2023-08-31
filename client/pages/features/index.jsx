import Image from "next/image";
import Layout from "../../components/layout";

import styles from '../../css/Background.module.css';

import feature1 from '../../public/assets/img/feature-1.png'

export default function Features({ global, pageData, preview }) {
  return (
    <Layout
      global={global}
      pageData={pageData}
      // type="blog-page"
      preview={preview}
    >
      <section className={`h-screen ${styles.featureBackground} flex items-end`}>
        <div className="w-10/12 mx-auto pb-4 pr-20">
          <h1 className="title-font lg:text-6xl text-5xl mb-4 font-black text-white">
            {/* {title} */}
            Key Features
          </h1>
          <p className="mb-8 px-2 text-white leading-relaxed">
            {/* {text} */}
            Inspired by our love for the arts, the township of Setia AlamImpian is crafted with the harmonious union between art and nature in mind. Explore the arts inspired living only in Setia AlamImpian. Located strategically in Setia AlamImpian, Shah Alam, find out more about our property development that is available for sale here.
          </p>
        </div>
      </section>

      <section>
        <div className="grid sm:grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-20">
          <div className="sm:py-8 md:pt-20 md:pb-0 md:pl-20">
            <p className='text-black text-[24px] font-bold pb-4'>
              The Upgrading Features Of Setia AlamImpian Central Park
            </p>
            <p className='pb-4'>
              New LakePoint Central next to LakePoint Club house with al-fresco concept
            </p>
          </div>
          <div className="filledImage">
            <Image src={feature1} />
          </div>
        </div>
      </section>

    </Layout>
  )
}