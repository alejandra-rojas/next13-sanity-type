import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";
import { Welcome } from "@/types/Welcome";

export async function getWelcome(): Promise<Welcome> {
  return createClient(clientConfig).fetch(groq`*[_type == "welcome"]{
    _id,
    _createdAt,
    title,
    subtitle,
    "featured": featured_project->{
      name,
      slug,
      image {
        asset-> {
          url
        }
      }
    },
    projects
  }[0]`);
}

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": {
      "url": image.asset->url,
      "alt": image.alt
    },
    url,
    content
  }`);
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      url,
      content
  }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}
