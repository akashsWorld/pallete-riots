import branding from "@/public/branding.jpg";
import webDesign from "@/public/web_design.jpg";
import appDesign from "@/public/app_design.jpg";
import illustration from "@/public/illustration.png";
import bookCoverDesign from "@/public/book_cover_design.jpg";
import digitalArt from "@/public/digital_art.jpg";
import utsApp from '@/public/uts_app.jpg';
import palleteRiots from '@/public/pallete_riots.png';
import cryptoWallet from '@/public/crypto_wallet.jpg';

import { StaticImageData } from "next/image";
const constants: ConstantType = {
  contactInfo: {
    whatsappNumber: "8240768751",
    email: "business@paletteriots.com",
  },
  portfolio: [
    {
      image: utsApp,
      title: "UTS App",
      subTitle: "Reimagining the UI for a better experience",
      tags: ["App Design", "UX/UI Design", "Revamping"],
    },
    {
      image: palleteRiots,
      title:'Palette Riots',
      subTitle:'Crafting a Bold & Timeless Design Identity',
      tags:[
        'Brand Identity',
        'Logo Design',
        'Business Card Design'
      ],
      targetUrl:'https://medium.com/@business_7608/palette-riots-the-birth-of-a-bold-identity-094fb7a7af47'
    },
    {
      image:cryptoWallet,
      title:'Crypto Wallet',
      subTitle:'Seamless & Secure Next-Gen Crypto Wallet UI',
      tags:[
        'App Design',
        'UI/UX Design',
        'Prototyping'
      ]
    }
  ],
  workCards: [
    {
      title: "Branding",
      image: branding,
    },
    {
      title: "Web Design",
      image: webDesign,
    },
    {
      title: "App Design",
      image: appDesign,
    },
    {
      title: "Illustration",
      image: illustration,
    },
    {
      title: "Book Cover design",
      image: bookCoverDesign,
    },
    {
      title: "Digital Art",
      image: digitalArt,
    },
  ],
};

export default constants;

export interface ConstantType {
  contactInfo: {
    whatsappNumber: string;
    email: string;
  }
  portfolio: PortFolio[];
  workCards:WorkCard [];
}
export interface PortFolio {
  image: StaticImageData;
  title: string;
  targetUrl?:string;
  subTitle: string;
  tags: string[];
}

export interface WorkCard {
  title: string;
  image: StaticImageData;
}