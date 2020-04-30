import portfolio from "../../../../assets/SVG/Aside-Drawer/portfolio1.svg";
import servise from "../../../../assets/SVG/Aside-Drawer/servise1.svg";
import about from "../../../../assets/SVG/Aside-Drawer/about1.svg";
import mail from "../../../../assets/SVG/Aside-Drawer/mail1.svg";

export const navigationLinks = [
  {
    label: "who we are",
    to: "travel-hero",
    icon: servise,
  },
  {
    label: "what we do",
    to: "travel-choose",
    icon: about,
  },
  {
    label: "travel whith us",
    to: "travel-countrys",
    icon: portfolio,
  },
  {
    label: "contact us",
    to: "travel-testimonial",
    icon: mail,
  },
];
