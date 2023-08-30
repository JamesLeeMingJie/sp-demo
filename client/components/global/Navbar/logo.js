import delve from 'dlv';
import Link from 'next/link';

import Image from 'next/image';
import spLogo from '../../../public/assets/img/sp-logo.svg';

const Logo = ({ button, locale }) => {
  return (
    <Link href={`${delve(button, 'href')}?lang=${locale || 'en'}`}>
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image width={200} src={spLogo} />
      </a>
    </Link>
  );
};

export default Logo;
