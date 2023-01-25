import Link from "next/link";
import { asLink } from "@prismicio/helpers";
import type { SocialsProps } from "types/prismic";
import { IMDBIcon, InstagramIcon, VimeoIcon } from "../icons/Icons";

export const Footer = ({ socials }: { socials: SocialsProps }) => {
  return (
    <footer className="mt-8 flex h-80 flex-col items-center justify-center gap-8 bg-neutral-900">
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
      <span className="text-xs text-white">
        ©{new Date().getFullYear()} Ryan Spacone. All rights reserved.
      </span>
    </footer>
  );
};
