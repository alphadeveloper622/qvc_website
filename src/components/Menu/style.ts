import className from 'classnames';

export const navbarDeskClass = className(
  'poppins600',
  'flex',
  'uppercase',
  'tracking-[1px]',
  'text-[#1E1B1C]',
  'w-max',
  'flex-col',
  'items-start',
  'text-sm'
);

export const liDeskClass = className(
  'mb-2.5',
  'last:mb-0',
  'mr-0',
  'last:mr-0',
  'hover:border-b',
  'hover:border-black',
  'hover:border-solid'
);
export const navbarMobileClassFunc = className(
  'md:flex-row',
  'md:items-center',
  'md:text-base'
);
export const liMobileClassFunc = className(
  'md:mb-0',
  'md:mr-[3.3vw]',
  'desktop:mr-[50px]'
);

export const liActiveClassFunc = className(
  'border-b',
  'border-black',
  'border-solid'
);
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
