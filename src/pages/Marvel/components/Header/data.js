import portfolio from "../../../../assets/SVG/Aside-Drawer/portfolio1.svg";
import servise from "../../../../assets/SVG/Aside-Drawer/servise1.svg";
import about from "../../../../assets/SVG/Aside-Drawer/about1.svg";
import prise from "../../../../assets/SVG/Aside-Drawer/prise1.svg";
import home from "../../../../assets/SVG/Aside-Drawer/home1.svg";
import mail from "../../../../assets/SVG/Aside-Drawer/mail1.svg";
import news from "../../../../assets/SVG/Aside-Drawer/news1.svg";

export const navigationLinks = [
  {
    label: "home",
    to: "hero",
    icon: home,
  },
  {
    label: "about",
    to: "about",
    icon: about,
  },
  {
    label: "portfolio",
    to: "portfolio",
    icon: portfolio,
  },
  {
    label: "servise",
    to: "service",
    icon: servise,
  },
  {
    label: "price",
    to: "price",
    icon: prise,
  },
  {
    label: "blog",
    to: "blog",
    icon: news,
  },
  {
    label: "contact",
    to: "contact",
    icon: mail,
  },
];
