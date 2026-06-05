import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: 'Discover Us',
    link: '/about-us',
    dropdown_menus: [
      { title: 'About Us', link: '/about-us' },
      { title: 'Our Team', link: '/team' },
      { title: 'Portfolio', link: '/portfolio-standard' },
      { title: 'Careers', link: '/contact' },
      { title: 'Blogs', link: '/blog-modern' },
    ]
  },
  {
    id: 2,
    title: 'Services',
    link: '/service',
    dropdown_menus: [
      { title: 'App Development', link: '/service-details' },
      { title: 'Web Design & Development', link: '/service-details' },
      { title: 'Digital Marketing', link: '/service-details' },
    ]
  },
  {
    id: 3,
    title: 'Industries',
    link: '#',
    dropdown_menus: [
      { title: 'Construction', link: '/service' },
      { title: 'Education', link: '/service' },
      { title: 'Entrepreneurs', link: '/service' },
      { title: 'Financial Services', link: '/service' },
      { title: 'Healthcare', link: '/service' },
      { title: 'Retail & E-commerce', link: '/service' },
      { title: 'Media & Entertainment', link: '/service' },
      { title: 'SME', link: '/service' },
      { title: 'Travel & Hospitality', link: '/service' },
    ]
  },
  {
    id: 4,
    title: 'Contact Us',
    link: '/contact',
    dropdown_menus: [
      { title: 'Contact Us', link: '/contact' },
      { title: 'Get In Touch', link: '/contact-2' },
    ]
  }
];



export default menu_data;

// mobile menus
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
      title: string;
      link: string;
  }[];
}[] = [
  {
    id: 1,
    title: 'Discover Us',
    link: '/about-us',
    dropdown_menus: [
      { title: 'About Us', link: '/about-us' },
      { title: 'Our Team', link: '/team' },
      { title: 'Portfolio', link: '/portfolio-standard' },
      { title: 'Careers', link: '/contact' },
      { title: 'Blogs', link: '/blog-modern' },
    ]
  },
  {
    id: 2,
    title: 'Services',
    link: '/service',
    dropdown_menus: [
      { title: 'App Development', link: '/service-details' },
      { title: 'Web Design & Development', link: '/service-details' },
      { title: 'Digital Marketing', link: '/service-details' },
    ]
  },
  {
    id: 3,
    title: 'Industries',
    link: '#',
    dropdown_menus: [
      { title: 'Construction', link: '/service' },
      { title: 'Education', link: '/service' },
      { title: 'Entrepreneurs', link: '/service' },
      { title: 'Financial Services', link: '/service' },
      { title: 'Healthcare', link: '/service' },
      { title: 'Retail & E-commerce', link: '/service' },
      { title: 'Media & Entertainment', link: '/service' },
      { title: 'SME', link: '/service' },
      { title: 'Travel & Hospitality', link: '/service' },
    ]
  },
  {
    id: 4,
    title: 'Contact Us',
    link: '/contact',
    dropdown_menus: [
      { title: 'Contact Us', link: '/contact' },
      { title: 'Get In Touch', link: '/contact-2' },
    ]
  }
]
