import { Banknote, Bed, ChartSpline, Globe2Icon, HelpCircle, MapPin, MessageSquareWarning, PcCase, Plane, Settings } from "lucide-react";
import { forwardRef } from "react";
import { NavLink } from "react-router";

const Sidebar = forwardRef<HTMLElement, { isOpen: boolean }>(({ isOpen }, ref) => {
  return (
    <aside
      ref={ref}
      className={`w-[256px] bg-[#303133] fixed z-50 bottom-0 left-0 h-[calc(100vh-56px)] transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-[300px]"
      } grid grid-rows-[30%_40%_30%] lg:grid-rows-[33%_33%_34%]`}
    >
      <ul className="w-full border-b pe-[16px]">
        <NavLink to={"/"} className={"*:text-white flex items-center min-h-[48px] hover:bg-border/30  rounded-r-full gap-[24px]  ps-6"}>
          <PcCase className="scale-95" />
          <span className="text-[15px] -mt-0.5">Travel</span>
        </NavLink>
        <NavLink to={"/"} className={"*:text-white flex items-center min-h-[48px] hover:bg-border/30 rounded-r-full gap-[24px]  ps-6"}>
          <Globe2Icon />
          <span className="text-[15px] -mt-0.5">Explore</span>
        </NavLink>
        <NavLink to={"/"} className={" flex items-center min-h-[48px] bg-primary/20  text-primary  rounded-r-full gap-[24px]  ps-6"}>
          <Plane />
          <span className="text-[15px] -mt-0.5">Flights</span>
        </NavLink>
        <NavLink to={"/"} className={"*:text-white flex items-center min-h-[48px] hover:bg-border/30  rounded-r-full gap-[24px]  ps-6"}>
          <Bed />
          <span className="text-[15px] -mt-0.5">Hotels</span>
        </NavLink>
      </ul>
      <ul className="w-full border-b pe-[16px] pb-[3px]">
        <NavLink to={"/"} className={"*:text-white flex items-center min-h-[48px] hover:bg-border/30  rounded-r-full gap-[24px]  ps-6"}>
          <ChartSpline className="scale-95" />
          <span className="text-[15px] -mt-0.5">Tracked Flight Prices</span>
        </NavLink>
        <NavLink to={"/"} className={"*:text-white flex items-center min-h-[48px] hover:bg-border/30 rounded-r-full gap-[24px]  ps-6"}>
          <Globe2Icon />
          <span className="text-[15px] -mt-0.5">Change Language</span>
        </NavLink>
        <NavLink to={"/"} className={"*:text-white flex items-center min-h-[48px] bg-border/30 rounded-r-full gap-[24px]  ps-6"}>
          <Banknote />
          <span className="text-[15px] -mt-0.5">Change Currencty</span>
        </NavLink>
        <NavLink to={"/"} className={"*:text-white flex items-center min-h-[48px] hover:bg-border/30  rounded-r-full gap-[24px]  ps-6"}>
          <MapPin />
          <span className="text-[15px] -mt-0.5">Change Location</span>
        </NavLink>
      </ul>
      <ul className="w-full border-b pe-[16px] pb-[3px]">
        <NavLink to={"/"} className={"*:text-white flex items-center min-h-[48px] bg-border/30 rounded-r-full gap-[24px]  ps-6"}>
          <Settings />
          <span className="text-[15px] -mt-0.5">Flight Settings</span>
        </NavLink>
        <NavLink to={"/"} className={"*:text-white flex items-center min-h-[48px] hover:bg-border/30 rounded-r-full gap-[24px]  ps-6"}>
          <MessageSquareWarning />
          <span className="text-[15px] -mt-0.5">Feedback</span>
        </NavLink>
        <NavLink to={"/"} className={"*:text-white flex items-center min-h-[48px] hover:bg-border/30  rounded-r-full gap-[24px]  ps-6"}>
          <HelpCircle className="scale-95" />
          <span className="text-[15px] -mt-0.5">Help</span>
        </NavLink>
      </ul>
    </aside>
  );
});
Sidebar.displayName = "Sidebar";
export { Sidebar };
