export interface Blog {
  title: string;
  date: string;
  image: string;
  caption: string;
  id: number;
  content: string;
  slug: string;
}

export interface Project {
  image: string;
  title: string;
  live: string;
  srcCode: string;
  id: number;
}

export type FixMeLater = any;
