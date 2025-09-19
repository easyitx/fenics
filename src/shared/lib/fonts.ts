import localFont from 'next/font/local';

export const proximaNova = localFont({
  src: [
    {
      path: '../../../public/font/proximanova_light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/font/proximanova_regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/font/proximanova_bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/font/proximanova_extrabold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../public/font/proximanova_black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-proxima-nova',
  display: 'swap',
});