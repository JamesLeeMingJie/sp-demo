// import delve from 'dlv';
// import Link from 'next/link';

const Nav = ({ links, locale }) => {
  return (
    <nav className="text-xl flex flex-wrap text-white p-5 flex-col md:flex-row items-center gap-x-8">
      {/* {links.map((link, index) => (
        <Link
          href={`${delve(link, 'href')}?lang=${locale || 'en'}`}
          key={`navigationLink-${index}`}
        >
          <a className="md:mr-10 hover:text-gray-900" key={`link-${index}`} target={delve(link, 'target')}>
            {delve(link, 'label')}
          </a>
        </Link>
      ))} */}

      <div>Key Features</div>
      <div>Collections</div>
      <div>Community</div>
      <div>Resources</div>
      <div>Calculator</div>
      <div>Registration</div>
      <div>Contact Us</div>
    </nav>
  );
};

export default Nav;
