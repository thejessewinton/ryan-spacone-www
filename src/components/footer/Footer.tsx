import Link from "next/link";
import { IMDBIcon, InstagramIcon, VimeoIcon } from "../icons/Icons";

export const Footer = () => {
  return (
    <footer className="mt-8 flex h-80 flex-col items-center justify-center gap-8 bg-neutral-900">
      <nav className="flex items-center justify-center gap-4">
        <Link href="https://www.imdb.com/name/nm0000001/">
          <IMDBIcon />
        </Link>
        <Link href="#">
          <InstagramIcon />
        </Link>
        <Link href="#">
          <VimeoIcon />
        </Link>
      </nav>
      <span className="text-white">
        ©{new Date().getFullYear()} Ryan Spacone. All rights reserved.
      </span>
    </footer>
  );
};
