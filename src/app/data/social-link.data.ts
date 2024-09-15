import { SocialLinkSchema } from "@data/schema/social-links.schema";
import { envelope } from '@icon/solid.icon'
import { github, instagram, linkedin } from '@icon/brand.icon'


const socialLinkData: SocialLinkSchema[] = [
  {
    name: 'Github',
    path: github,
    link: 'https://github.com/Vyankat45',
    color: '#c3c3c3',
  },
  {
    name: 'LinkedIn',
    path: linkedin,
    link: 'https://www.linkedin.com/in/vyankat-rathod-4ba5a2245/',
    color: '#1469C7',
  },
  {
    name: 'Message',
    path: envelope,
    link: 'mailto:imvyankat45@gmail.com?subject=Hi Vyankat Rathod!',
    color: '#e74c3c',
  },
  {
    name: 'Instagram',
    path: instagram,
    link: 'https://instagram.com/imvyankat45',
    color: '#E52765',
  },
];

export default socialLinkData;
