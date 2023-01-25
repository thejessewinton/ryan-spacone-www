import Link from "next/link";
import { Link as PrismicLink } from "prismic-reactjs";
import type { SocialsProps } from "types/prismic";
import { IMDBIcon, InstagramIcon, VimeoIcon } from "../icons/Icons";

export const Footer = ({ socials }: { socials: SocialsProps }) => {
  return (
    <footer className="mt-8 flex h-80 flex-col items-center justify-center gap-8 bg-neutral-900">
      <nav className="flex items-center justify-center gap-4">
        {socials.map((social) => (
          <Link href={PrismicLink.url(social.link)} key={social.label}>
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
      <span className="text-white">
        ©{new Date().getFullYear()} Ryan Spacone. All rights reserved.
      </span>
    </footer>
  );
};
