import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect } from "react";

export const useScrollToTop = () => {
  const pathname = useSelectedLayoutSegments();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
