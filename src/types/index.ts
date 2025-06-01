export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: object;
  category: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
}