export type Project = {
  title: string;
  description: string;
  tools: string[];
  links: {
    type: "Github" | "Live Site";
    link: string;
  }[];
};

export type SocialLink = {
  name: string;
  value: string;
  isLink: boolean;
  link: string | null;
  src: string;
};

export type ListItemType = {
  date: string;
  title: string;
  subTitle?: string;
  location?: string;
  description?: string;
};
