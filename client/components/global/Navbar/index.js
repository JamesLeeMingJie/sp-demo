import delve from 'dlv';
import Cta from './cta';
import LocalSwitch from './localSwitch';
import Logo from './logo';
import Nav from './nav';

import GitHubButton from 'react-github-btn';

const Navigation = ({ navigation, pageData, type }) => {
  return (
    <header className="text-gray-600 bg-white body-font border-b-2">
      <div className="absolute w-full">
        <div className="container mx-auto w-10/12 flex justify-between items-center gap-x-24">
          <Logo
            button={delve(navigation, 'leftButton')}
            locale={delve(pageData, 'attributes.locale')}
          />

          <Nav
            links={delve(navigation, 'links')}
            locale={delve(pageData, 'attributes.locale')}
          />

          {/* {delve(navigation, 'rightButton') && (
          <div className="flex">
            <div className="mr-5 py-4 px-6 hidden 2xl:block">
              <GitHubButton
                href="https://github.com/strapi/foodadvisor"
                data-show-count="true"
                data-size="large"
                aria-label="Star strapi/foodadvisor on GitHub"
              >
                Star
              </GitHubButton>
            </div>
            <Cta
              href={delve(navigation, 'rightButton.href')}
              target={delve(navigation, 'rightButton.target')}
              label={delve(navigation, 'rightButton.label')}
            />
            <LocalSwitch pageData={pageData} type={type} />
          </div>
        )} */}
        </div>
      </div>
    </header>
  );
};

Navigation.defaultProps = {};

export default Navigation;
