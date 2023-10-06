"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Nav({ pages }: { pages: Array<any> }) {
  console.log(pages);
  const path = usePathname();
  console.log(path);

  return (
    <ul className="[&_li]:ml-4 ml-12 flex">
      {pages.map((page) => (
        <li key={page._id}>
          <Link className="relative " href={`/${page.slug}`}>
            {`/${page.slug}` === path && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 top-full block h-[1px] bg-black w-full"
              />
            )}

            {page.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// CSS nav animation
/* export default function Nav({ pages }: { pages: Array<any> }) {
    console.log(pages);
    const pathname = usePathname();
  
    return (
      <ul
        className={`flex gap-3 items-end md:items-start  right-0 z-50 top-8  ease-in-out md:translate-y-0 transition-opacity md:transition-none duration-500 absolute md:opacity-100 md:static md:h-auto overflow-hidden`}
      >
        {pages.map((page) => (
          <li
            key={page._id}
            className={`nav-item flex-grow-0 inline-block ${
              pathname.includes(`${page.slug}`) ? "active" : ""
            }`}
          >
            <Link key={page._id} href={`/${page.slug}`}>
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  } */
