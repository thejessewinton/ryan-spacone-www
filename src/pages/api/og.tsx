import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";
import { Logo } from "../../components/icons/Icons";

export const config = {
  runtime: "experimental-edge",
};

const handler = (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Ryan Spacone";
    return new ImageResponse(
      (
        <div tw="font-bold font-sans bg-white h-full w-full flex items-center justify-center">
          <Logo />
          <h5 tw="text-2xl ml-4">{title}</h5>
        </div>
      ),
      {
        width: 1200,
        height: 600,
      }
    );
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};

export default handler;
