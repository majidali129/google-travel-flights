import { Dispatch, SetStateAction, useEffect } from "react";

export const useToggleSidebar = (isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>>) => {
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setOpen(false);
    };
    if (isOpen) window.addEventListener("scroll", handleScroll, { once: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, setOpen]);
};
