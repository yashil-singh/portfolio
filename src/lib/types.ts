import { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tools: string[];
  links: {
    type: "Github" | "Live Site";
    link: string;
  }[];
};

export type SocialLinkType = {
  name: string;
  value: string;
  isLink: boolean;
  link: string | null;
  Icon: LucideIcon;
};

export type ListItemType = {
  date: string;
  title: string;
  subTitle?: string;
  location?: string;
  description?: string;
};
