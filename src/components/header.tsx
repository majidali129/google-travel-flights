import { AlignJustify, CircleUser, Grip, Sun } from "lucide-react";
import { cloneElement, Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router";
import logo from "../../public/svgs/logo.svg";
import { ExploreIcon, FlightsIcon, HotelsIcon, TravelIcon, VacationRentalIcon } from "./icons/icons";

type HeaderProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const Header = ({ setIsOpen }: HeaderProps) => {
  const navItems = [
    { label: "Travel", href: "/travel", icon: <TravelIcon /> },
    { label: "Explore", href: "/explore", icon: <ExploreIcon /> },
    { label: "Flights", href: "/flights", icon: <FlightsIcon /> },
    { label: "Hotels", href: "/hotels", icon: <HotelsIcon /> },
    { label: "Vacation rentals", href: "/", icon: <VacationRentalIcon /> },
  ];

  const handleSidebarToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  return (
    <nav className="bg-background text-white px-5 pe-3 lg:px-4 md:pe-4 py-3.5 lg:py-3  border-b border-border fixed w-full z-40">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[34px]">
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                handleSidebarToggle();
                e.stopPropagation();
              }}
              className="lg:w-10 lg:h-10 lg:hover:bg-border/20 lg:focus:bg-border/30 lg:active:bg-border/30 cursor-pointer rounded-full  flex items-center justify-center"
            >
              <AlignJustify className="h-[22px]" />
            </button>
            <span className="pt-1 ">
              <img src={logo} alt="" />
            </span>
          </div>

          <ul className="hidden lg:flex items-center  gap-[6px] ">
            {navItems.map((item) => (
              <NavLink to={item.href} className={"h-10 ps-3 pe-4 border border-border rounded-[20px] flex items-center gap-[8px] hover:text-primary hover:bg-primary/2 last:bg-primary/18 last:text-primary last:border-0"}>
                {cloneElement(item.icon, {
                  className: "w-4 h-4 !text-sky-400",
                })}
                <span className="text-sm font-semibold tracking-wide pb-0.5">{item.label}</span>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-5">
          <button className="p-1.5 rounded-full hover:bg-[#36373b] max-sm:-mr-[1px] md:mr-[1px]">
            <Sun className=" opacity-85 hover:opacity-100 w-[18px] h-[18px]" />
          </button>
          <button>
            <Grip className="h-[20.5px] w-[20.5px]" />
          </button>
          <CircleUser className="h-9 w-9" />
        </div>
      </div>
      <div className="h-12 lg:hidden">
        <ul className="flex  items-end  justify-around  gap-[6px] h-full">
          {navItems.map((item) => (
            <NavLink to={item.href} className={" flex items-center nth-[3]:text-primary nth-[3]:border-b-3 nth-[3]:border-primary nth-[3]:pb-[9px] nth-[3]:-mb-[13px]"}>
              <span className="text-sm font-semibold tracking-wide">{item.label}</span>
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export { Header };
