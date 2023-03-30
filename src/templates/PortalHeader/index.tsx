import { EnvelopeIcon } from '@heroicons/react/20/solid';

import Logo from '@/components/Logo';
import { Section } from '@/layouts/Section';
import { BorderDirections } from '@/utils/global';

type IHeaderProps = {
  borderColor?: string;
  borderDirection?: BorderDirections;
};
export default function Index(props: IHeaderProps) {
  return (
    <Section
      padding="md:py-6 md:px-[45px] md:h-[125px] px-[20px] h-[90px] py-[15px]"
      className="!max-w-full"
      borderDirection={BorderDirections.Bottom}
      borderColor="border-[#DADEE3]"
      {...props}
    >
      <nav className="z-30 w-full  bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <div className="block items-center justify-start text-center md:flex">
            <Logo className="flex w-[136px] md:w-[247px]" />
            <span className="md:poppins400 poppins600 sr-only self-center whitespace-nowrap text-xl lg:not-sr-only lg:ml-[46px] lg:text-4xl">
              Account portal
            </span>
          </div>
          <div className={`flex flex-row`}>
            <div className="relative ml-3 hidden h-[55px] w-[158px] items-center justify-end rounded-[27.5px] border-[#DADEE3] px-[14px] md:flex md:border">
              <button
                type="button"
                className="flex w-full justify-around rounded-full text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button-2"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-2"
              >
                <EnvelopeIcon
                  className="h-5 w-5 text-black"
                  aria-hidden="true"
                />
                <span className="poppins400 mr-1 self-center text-xs">
                  Contact Us
                </span>
              </button>
              <div
                className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
                id="dropdown-2"
                style={{
                  position: 'absolute',
                  inset: '0px auto auto 0px',
                  margin: '0px',
                  transform: ' translate(0px, 58px)',
                }}
                data-popper-placement="bottom"
              >
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    Neil Sims
                  </p>
                  <p
                    className="truncate text-sm font-medium text-gray-900 dark:text-gray-300"
                    role="none"
                  >
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative ml-3 flex h-[55px] w-[158px] items-center justify-end rounded-[27.5px] border-[#DADEE3] px-[14px] md:border">
              <button
                type="button"
                className="flex w-full justify-around rounded-full text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button-2"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-2"
              >
                <span className="poppins400 mr-1 self-center text-xs">
                  Welcome Lisa
                </span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>
              <div
                className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
                id="dropdown-2"
                style={{
                  position: 'absolute',
                  inset: '0px auto auto 0px',
                  margin: '0px',
                  transform: ' translate(0px, 58px)',
                }}
                data-popper-placement="bottom"
              >
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    Neil Sims
                  </p>
                  <p
                    className="truncate text-sm font-medium text-gray-900 dark:text-gray-300"
                    role="none"
                  >
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Section>
  );
}
