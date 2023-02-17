import { clsx } from "clsx";

export const HoverLine = ({ open }: { open?: boolean }) => {
  return (
    <span
      className={clsx(
        "absolute z-50 block h-[1px] w-[120%] origin-left scale-x-0 cursor-pointer bg-brand transition-transform group-hover:scale-x-100",
        open && "scale-x-100"
      )}
    />
  );
};
