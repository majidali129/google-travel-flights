import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ArrowRightLeft, Calendar as CalendarIcon, CircleSmall, MapPin, SearchIcon, User } from "lucide-react";
import { ChangeEvent, HTMLAttributes, useState } from "react";
import { DateRange } from "react-day-picker";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

const FlightsForm = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const [from, setFrom] = useState("Multan");
  const [date, setDate] = useState<DateRange | undefined>({ from: undefined, to: undefined });

  const handleChangeFrom = (e: ChangeEvent<HTMLInputElement>) => {
    setFrom(e.target.value);
  };
  return (
    <div className="max-w-5xl mx-auto lg:px-4 max-lg:px-4">
      <div className="lg:h-[156px] h-[190px] shadow-xl  lg:bg-[#36373b] relative rounded-md lg:shadow">
        <div className="pt-2 lg:px-4  space-y-[9px]">
          <div className="  gap-2 flex items-center">
            <Select>
              <SelectTrigger className="border-0  text-[14px] !bg-transparent !outline-0 !ring-0">
                <SelectValue
                  placeholder={
                    <>
                      <ArrowRightLeft />
                      <span>Rount trip</span>
                    </>
                  }
                />
              </SelectTrigger>
              <SelectContent>Content</SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-0  text-[14px] !bg-transparent !outline-0 !ring-0">
                <SelectValue
                  placeholder={
                    <>
                      <User />
                      <span>2</span>
                    </>
                  }
                />
              </SelectTrigger>
              <SelectContent>Content</SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-0  text-[14px] !bg-transparent !outline-0 !ring-0">
                <SelectValue placeholder="Economy" />
              </SelectTrigger>
              <SelectContent>Content</SelectContent>
            </Select>
          </div>
          <div className="lg:grid lg:grid-cols-[59.6%_38.7%] lg:gap-x-4 gap-y-3 ">
            <div className="grid grid-cols-2 gap-2 relative max-lg:!max-h-7 lg:h-12">
              <div className="flex items-center gap-0.5 border px-[16px] rounded-[3px] focus-within:border-2 focus-within:border-primary">
                <CircleSmall />
                <Input type="text" value={from} className="lg:py-[27px] py-[22.5px] border-0 !bg-transparent font-semibold !text-[1rem] focus-visible:ring-0" onChange={handleChangeFrom} />
              </div>
              <div className="lg:w-9 lg:h-9 h-8 w-8 rounded-full absolute sss bg-background lg:bg-[#36373b]  flex items-center justify-center left-1/2 -translate-x-1/2 top-2">
                <ArrowRightLeft className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-0.5 border px-6 rounded-[3px] focus-within:border-primary focus-within:border-2">
                <MapPin className="w-6 h-6 scale-90" />
                <Input type="text" autoFocus value={"Where to?"} className="lg:py-[27px] py-[22.5px]  border-0 !bg-transparent font-semibold !text-[1rem] focus-visible:ring-0 opacity-80 -mt-1" onChange={handleChangeFrom} />
              </div>
            </div>
            <div className="lg:min-h-[56px] relative max-lg:top-8">
              <div className={cn("grid gap-2 h-full", className)}>
                <Popover>
                  <div className=" grid grid-cols-[49.93%_0.3%_49.5%] lg:grid-cols-[54%_1%_45%] border border-border rounded-[3px]">
                    <PopoverTrigger asChild className="w-full">
                      <Button id="date" variant={"outline"} className={cn("h-full !ps-[17px] py-3 justify-start font-normal flex gap-[9px] border-0 !bg-transparent", !date && "text-muted-foreground")}>
                        <CalendarIcon className="!w-5 !h-5" />
                        {date?.from ? format(date.from, "LLL dd, y") : <span className="opacity-60 text-[1rem] -mt-0.5">Departure</span>}
                      </Button>
                    </PopoverTrigger>
                    <div className="h-[50%] my-auto w-[.5px] bg-border"></div>
                    <PopoverTrigger asChild className="w-full">
                      <Button id="date" variant={"outline"} className={cn("h-full border-0 !ps-[12px] justify-start  text-left font-normal !bg-transparent", !date && "text-muted-foreground")}>
                        {date?.to ? format(date.to, "LLL dd, y") : <span className="opacity-70 text-[1rem] -mt-0.5">Return</span>}
                      </Button>
                    </PopoverTrigger>
                  </div>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2} />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
        <Button size="lg" className="px-6 absolute bg-primary flex items-center gap-3.5  -bottom-[18px] left-1/2 rounded-full -translate-x-1/2">
          <SearchIcon /> Explore
        </Button>
      </div>
    </div>
  );
};
export { FlightsForm };
