import className from 'classnames';

export const navbarDeskClass = className(
  'poppins600',
  'flex',
  'uppercase',
  'tracking-[1px]',
  'text-[#1E1B1C]',
  'w-max',
  'flex-col',
  'text-2xl'
);

export const liDeskClass = className(
  'mb-2.5',
  'last:mb-0',
  'mr-0',
  'last:mr-0',
  'hover:border-b',
  'hover:border-white',
  'hover:border-solid'
);
export const navbarMobileClassFunc = className(
  'md:flex-row',
  'md:items-center',
  'header:text-base',
  'text-white',
  'm-auto'
);
export const liMobileClassFunc = className('md:mb-0', 'md:mr-12');
// export const navbarMobileClassFunc = (prefix: string) => {
//   return className(
//     `${prefix}:flex-row`,
//     `${prefix}:items-center`,
//     `${prefix}:text-base`
//   );
// };

// export const liMobileClassFunc = (prefix: string) => {
//   return className(`${prefix}:mb-0`, `${prefix}:mr-12`);
// };
export const mobileToggle = className(
  'cursor-pointer',
  'flex',
  'items-center',
  'text-3xl',
  'duration-300',
  'transition-all',
  'ease-linear',
  'relative',
  'hover:text-white',
  'not-sr-only',
  'header:sr-only',
  'z-50'
);
export const mobileNav = className(
  'top-0',
  'right-[100%]',
  'bottom-0',
  'w-full',
  'h-full',
  'fixed',
  'flex',
  'flex-column',
  'justify-center',
  'item-center',
  'text-center',
  'bg-[#202020bf]',
  'backdrop-blur-sm',
  'translate-x-0',
  'duration-300',
  'transition-transform',
  'ease-linear',
  'z-40'
);
export const isMenu = className('translate-x-full');
