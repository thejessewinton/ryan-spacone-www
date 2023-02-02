import Link from "next/link";

export const ReturnTo = ({ link }: { link: string }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Link href={link} className="text-sm uppercase">
        Return to
      </Link>
    </div>
  );
};
