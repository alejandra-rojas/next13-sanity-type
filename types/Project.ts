import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: {
    url: string;
    alt: string;
  };
  alt: string;
  url: string;
  content: PortableTextBlock[];
};
