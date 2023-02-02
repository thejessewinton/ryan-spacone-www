"use client";

import { clsx } from "clsx";
import { useScroll } from "hooks/use-scroll";
import Link from "next/link";
import type { NavigationProps } from "types/prismic";
import { MobileNavigation } from "../navigation/mobile-navigation/MobileNavigation";
import { Navigation } from "../navigation/Navigation";

const Logo = () => {
  return (
    <svg
      width="124"
      height="114"
      viewBox="0 0 124 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-auto "
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.0133 0.619516C21.3808 1.25367 20.3606 4.93756 20.6258 5.63027C20.8695 6.26678 23.1015 6.56503 27.6288 6.56608C37.4912 6.56791 50.8536 7.8187 60.0136 9.597C64.6374 10.4949 74.4408 12.9936 76.8947 13.8999C87.5606 17.8394 93.2582 25.1042 92.6815 34.0292C92.243 40.8125 88.1954 46.127 81.8574 48.2407C74.53 50.6842 67.2448 48.8427 61.9419 43.2066C57.5327 38.5203 54.6507 32.4349 51.2992 20.7336C50.6216 18.3682 50.1974 18.0912 47.98 18.5651C43.5896 19.5032 39.6846 21.384 36.2361 24.221C31.3845 28.2128 29.5037 31.5783 29.2174 36.7807C29.0424 39.9564 29.5175 42.4538 30.8109 45.1595C31.7969 47.2228 34.0362 49.7931 35.8635 50.9592C37.4766 51.9886 43.6545 54.7375 48.5661 56.6109C60.5544 61.1841 65.7835 63.613 70.7752 66.9273C78.4809 72.0436 82.7754 78.0268 84.487 86.0303C85.1813 89.2771 85.2133 95.2007 84.5569 98.9696C83.7794 103.436 81.9883 108.268 79.7618 111.909C79.097 112.996 79.0485 113.624 79.6127 113.841C79.8395 113.929 89.559 114 101.212 114C121.063 114 122.423 113.971 122.799 113.543C123.288 112.984 124.185 109.257 123.966 108.687C123.786 108.216 122.909 107.978 119.105 107.37C114.649 106.658 112.16 105.138 109.811 101.692C107.487 98.2852 85.7181 59.0435 85.7181 58.2619C85.7181 57.6832 86.0651 57.5284 90.0199 56.3432C98.7682 53.7214 106.099 49.6117 111.435 44.3372C117.23 38.6099 120.013 32.3 120.322 24.1883C120.53 18.7332 119.785 15.1865 117.776 12.0711C113.707 5.75888 106.588 2.37089 93.7578 0.641473C90.9381 0.261399 86.3527 0.195004 56.5863 0.104037L22.6312 0L22.0133 0.619516ZM22.6221 83.4817C22.4834 83.8053 21.6134 87.4223 20.6886 91.5197C19.7638 95.6171 18.8206 99.4939 18.5924 100.135C17.6369 102.819 15.7394 104.974 13.3815 106.054C12.0109 106.681 7.75059 107.53 3.72306 107.979C2.15016 108.154 1.27964 108.373 1.0828 108.643C0.920891 108.865 0.57805 110.053 0.320463 111.283C-0.0815602 113.204 -0.0953782 113.554 0.223216 113.756C0.436481 113.892 10.8192 113.994 24.627 113.996C45.9277 113.999 48.7048 113.954 49.061 113.597C49.5595 113.097 50.6091 109.812 51.1926 106.924C51.9779 103.038 51.356 99.5122 49.3183 96.2991C47.39 93.2588 45.0319 91.5547 39.5005 89.2042C34.5154 87.0858 23.7202 82.8935 23.2509 82.8935C23.0439 82.8935 22.761 83.1581 22.6221 83.4817Z"
        className="fill-black dark:fill-white"
      />
    </svg>
  );
};

export const Header = ({ navigation }: { navigation: NavigationProps }) => {
  const scrolling = useScroll();
  return (
    <header
      className={clsx(
        "z-10 flex h-24 items-center justify-between bg-white px-9 dark:bg-neutral-900",
        scrolling && "drop-shadow-sm"
      )}
    >
      <Link href="/">
        <Logo />
      </Link>
      <div>
        <Navigation navigation={navigation} />
        <MobileNavigation navigation={navigation} />
      </div>
    </header>
  );
};
