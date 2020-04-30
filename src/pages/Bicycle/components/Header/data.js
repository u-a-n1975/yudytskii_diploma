import portfolio from "../../../../assets/SVG/Aside-Drawer/portfolio1.svg";
import about from "../../../../assets/SVG/Aside-Drawer/about1.svg";
import home from "../../../../assets/SVG/Aside-Drawer/home1.svg";
import mail from "../../../../assets/SVG/Aside-Drawer/mail1.svg";

export const navigationLinks = [
  {
    label: "about us",
    to: "bicycle-hero",
    icon: home,
  },
  {
    label: "work",
    to: "bicycle-work",
    icon: about,
  },
  {
    label: "shop",
    to: "bicycle-shop",
    icon: portfolio,
  },
  {
    label: "contact",
    to: "bicycle-contact",
    icon: mail,
  },
];
