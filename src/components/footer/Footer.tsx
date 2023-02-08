import Link from "next/link";
import { asLink } from "@prismicio/helpers";
import type { SocialsProps } from "types/prismic";
import { IMDBIcon, InstagramIcon, VimeoIcon } from "../icons/Icons";

export const Footer = ({ socials }: { socials: SocialsProps }) => {
  return (
    <footer className="z-100 relative flex h-40 flex-col items-center justify-center gap-8 border-t border-neutral-200 bg-white">
      <nav className="flex items-center justify-center gap-4">
        {socials.map((social) => (
          <Link href={asLink(social.link) as string} key={social.label}>
            <span className="sr-only">{social.label}</span>
            {social.label === "Instagram" ? (
              <InstagramIcon />
            ) : social.label === "Vimeo" ? (
              <VimeoIcon />
            ) : (
              <IMDBIcon />
            )}
          </Link>
        ))}
      </nav>
      <span className="text-xs">
        ©{new Date().getFullYear()} Ryan Spacone. All rights reserved.
      </span>
    </footer>
  );
};
