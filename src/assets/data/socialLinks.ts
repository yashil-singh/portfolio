import { SocialLinkType } from "@/lib/types";
import { Github, Linkedin, Mail, Smartphone } from "lucide-react";

const socialLinks: SocialLinkType[] = [
  {
    name: "Email",
    value: "yashilsingh0208@gmail.com",
    isLink: false,
    link: null,
    Icon: Mail,
  },
  {
    name: "Phone",
    value: "9864166916",
    isLink: false,
    link: null,
    Icon: Smartphone,
  },
  {
    name: "Github",
    value: "yashil-singh",
    isLink: true,
    link: "https://github.com/yashil-singh",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    value: "Yashil Singh",
    isLink: true,
    link: "https://www.linkedin.com/in/yashil-singh-31359b219/",
    Icon: Linkedin,
  },
];

export default socialLinks;
