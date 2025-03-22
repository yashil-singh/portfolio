import { SocialLink } from "@/lib/types";

const socialLinks: SocialLink[] = [
  {
    name: "Email",
    value: "yashilsingh0208@gmail.com",
    isLink: false,
    link: null,
    src: "images/gmail.svg",
  },
  {
    name: "Phone",
    value: "9864166916",
    isLink: false,
    link: null,
    src: "images/phone.svg",
  },
  {
    name: "Github",
    value: "yashil-singh",
    isLink: true,
    link: "https://github.com/yashil-singh",
    src: "images/github.svg",
  },
  {
    name: "LinkedIn",
    value: "Yashil Singh",
    isLink: true,
    link: "https://www.linkedin.com/in/yashil-singh-31359b219/",
    src: "images/linkedin.svg",
  },
];

export default socialLinks;
