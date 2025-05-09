import { Info } from "lucide-react";

const CheapFlights = () => {
  return (
    <div className=" pt-[38px] lg:pt-[30px] px-4">
      <div className="">
        <h3 className=" flex lg:items-center lg:gap-2  text-[1.25rem] text-light font-semibold md:tracking-[0.0023rem] leading-7 mb-[22px]">
          <span>Find cheap flights from Faisalabad to anywhere</span>
          <Info className="text-light/40 w-6 h-6 lg:w-4 lg:h-4" />
        </h3>
        <div className="ps-0.5 flex items-center gap-2.5 pb-[17px] *:hover:text-primary *:cursor-pointer">
          <div className="py-1 px-2.5 text-primary rounded-full w-fit bg-primary/20">Lahore</div>
          <div className="py-1 px-2.5 border border-border text-light rounded-full w-fit">Faisalabad</div>
          <div className="py-1 px-2.5 border border-border text-light rounded-full w-fit">Sialkot</div>
          <div className="py-1 px-2.5 border border-border text-light rounded-full w-fit">Multan</div>
        </div>
        <div className="h-[180px] group lg:h-[300px] rounded-xl relative bg-[url(../assets/images/staticmap.png)]  bg-no-repeat bg-center cursor-pointer">
          <div className="absolute  inset-0 z-30  h-full w-full flex items-center justify-center group-hover:bg-black/30 rounded-xl ease-in-out transition-all duration-300">
            <span className="bg-[#202125] hover:bg-[#202125]/80 py-1.5  rounded-full px-4 hover:text-primary">Explore destination</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CheapFlights };
