import clsx from "clsx";
import type { SVGAttributes } from "react";

const baseClass = "h-8 w-8";

export const Logo = ({ className, ...rest }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      width="124"
      height="114"
      viewBox="0 0 124 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("h-10 w-auto", className)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.0133 0.619516C21.3808 1.25367 20.3606 4.93756 20.6258 5.63027C20.8695 6.26678 23.1015 6.56503 27.6288 6.56608C37.4912 6.56791 50.8536 7.8187 60.0136 9.597C64.6374 10.4949 74.4408 12.9936 76.8947 13.8999C87.5606 17.8394 93.2582 25.1042 92.6815 34.0292C92.243 40.8125 88.1954 46.127 81.8574 48.2407C74.53 50.6842 67.2448 48.8427 61.9419 43.2066C57.5327 38.5203 54.6507 32.4349 51.2992 20.7336C50.6216 18.3682 50.1974 18.0912 47.98 18.5651C43.5896 19.5032 39.6846 21.384 36.2361 24.221C31.3845 28.2128 29.5037 31.5783 29.2174 36.7807C29.0424 39.9564 29.5175 42.4538 30.8109 45.1595C31.7969 47.2228 34.0362 49.7931 35.8635 50.9592C37.4766 51.9886 43.6545 54.7375 48.5661 56.6109C60.5544 61.1841 65.7835 63.613 70.7752 66.9273C78.4809 72.0436 82.7754 78.0268 84.487 86.0303C85.1813 89.2771 85.2133 95.2007 84.5569 98.9696C83.7794 103.436 81.9883 108.268 79.7618 111.909C79.097 112.996 79.0485 113.624 79.6127 113.841C79.8395 113.929 89.559 114 101.212 114C121.063 114 122.423 113.971 122.799 113.543C123.288 112.984 124.185 109.257 123.966 108.687C123.786 108.216 122.909 107.978 119.105 107.37C114.649 106.658 112.16 105.138 109.811 101.692C107.487 98.2852 85.7181 59.0435 85.7181 58.2619C85.7181 57.6832 86.0651 57.5284 90.0199 56.3432C98.7682 53.7214 106.099 49.6117 111.435 44.3372C117.23 38.6099 120.013 32.3 120.322 24.1883C120.53 18.7332 119.785 15.1865 117.776 12.0711C113.707 5.75888 106.588 2.37089 93.7578 0.641473C90.9381 0.261399 86.3527 0.195004 56.5863 0.104037L22.6312 0L22.0133 0.619516ZM22.6221 83.4817C22.4834 83.8053 21.6134 87.4223 20.6886 91.5197C19.7638 95.6171 18.8206 99.4939 18.5924 100.135C17.6369 102.819 15.7394 104.974 13.3815 106.054C12.0109 106.681 7.75059 107.53 3.72306 107.979C2.15016 108.154 1.27964 108.373 1.0828 108.643C0.920891 108.865 0.57805 110.053 0.320463 111.283C-0.0815602 113.204 -0.0953782 113.554 0.223216 113.756C0.436481 113.892 10.8192 113.994 24.627 113.996C45.9277 113.999 48.7048 113.954 49.061 113.597C49.5595 113.097 50.6091 109.812 51.1926 106.924C51.9779 103.038 51.356 99.5122 49.3183 96.2991C47.39 93.2588 45.0319 91.5547 39.5005 89.2042C34.5154 87.0858 23.7202 82.8935 23.2509 82.8935C23.0439 82.8935 22.761 83.1581 22.6221 83.4817Z"
        fill="black"
      />
    </svg>
  );
};

export const IMDBIcon = ({ className, ...rest }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(baseClass, className)}
      {...rest}
    >
      <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319.8H64V192h33zm113.2 0h-28.7v-86.4l-11.6 86.4h-20.6l-12.2-84.5v84.5h-29V192h42.8c3.3 19.8 6 39.9 8.7 59.9l7.6-59.9h43zm11.4 0V192h24.6c17.6 0 44.7-1.6 49 20.9 1.7 7.6 1.4 16.3 1.4 24.4 0 88.5 11.1 82.6-75 82.5zm160.9-29.2c0 15.7-2.4 30.9-22.2 30.9-9 0-15.2-3-20.9-9.8l-1.9 8.1h-29.8V192h31.7v41.7c6-6.5 12-9.2 20.9-9.2 21.4 0 22.2 12.8 22.2 30.1zM265 229.9c0-9.7 1.6-16-10.3-16v83.7c12.2.3 10.3-8.7 10.3-18.4zm85.5 26.1c0-5.4 1.1-12.7-6.2-12.7-6 0-4.9 8.9-4.9 12.7 0 .6-1.1 39.6 1.1 44.7.8 1.6 2.2 2.4 3.8 2.4 7.8 0 6.2-9 6.2-14.4z"></path>
    </svg>
  );
};

export const InstagramIcon = ({
  className,
  ...rest
}: SVGAttributes<SVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(baseClass, className)}
      {...rest}
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
    </svg>
  );
};

export const VimeoIcon = ({
  className,
  ...rest
}: SVGAttributes<SVGElement>) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(baseClass, className)}
      {...rest}
    >
      <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-16.2 149.6c-1.4 31.1-23.2 73.8-65.3 127.9-43.5 56.5-80.3 84.8-110.4 84.8-18.7 0-34.4-17.2-47.3-51.6-25.2-92.3-35.9-146.4-56.7-146.4-2.4 0-10.8 5-25.1 15.1L64 192c36.9-32.4 72.1-68.4 94.1-70.4 24.9-2.4 40.2 14.6 46 51.1 20.5 129.6 29.6 149.2 66.8 90.5 13.4-21.2 20.6-37.2 21.5-48.3 3.4-32.8-25.6-30.6-45.2-22.2 15.7-51.5 45.8-76.5 90.1-75.1 32.9 1 48.4 22.4 46.5 64z"></path>
    </svg>
  );
};

export const PlayIcon = ({ className, ...rest }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        "fill-transparent stroke-white transition-all hover:fill-white",
        className
      )}
      {...rest}
    >
      <path
        d="M1 8.80873V1.61803L7.84828 5.04217L1 8.80873Z"
        strokeWidth={0.35}
      />
    </svg>
  );
};

export const CloseIcon = ({
  className,
  ...rest
}: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx("text-white", baseClass, className)}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export const Airplane = ({ className, ...rest }: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx(baseClass, className)}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
};

export const RightArrow = ({
  className,
  ...rest
}: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx(baseClass, className)}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

export const LeftArrow = ({
  className,
  ...rest
}: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className={clsx(baseClass, className)}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
      />
    </svg>
  );
};

export const ChevronDown = ({
  className,
  ...rest
}: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx(baseClass, className)}
      {...rest}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
