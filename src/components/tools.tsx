import { BellDotIcon, CalendarDaysIcon, ChartSpline } from "lucide-react";
import { ActivityIcon, BellIcon, CalenderIcon } from "./icons/icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Tools = () => {
  return (
    <div className="space-y-3 pt-1.5 px-4">
      <h3 className="text-[1.25rem] pt-3.5 pb-1 text-light font-semibold md:tracking-[0.0023rem] leading-7">Useful tools to help you find the best deals</h3>
      <div className="hidden lg:block">
        <Tabs defaultValue="Find_the_cheapest">
          <div className="w-full flex justify-between gap-15">
            <TabsList className="bg-transparent px-0 py-0 grid grid-rows-2 gap-[13px]">
              <TabsTrigger value="Find_the_cheapest" className="min-h-[190px] z-10 relative rounded-2xl px-[24px] pt-[23px]  flex gap-3 items-start !bg-primary/10 max-w-[372.8px] !border-[rgba(138,180,248,0.6)] group">
                <CalenderIcon />
                {/* <CalendarDays className="w-[30px] h-[30px] md:!h-9 md:!w-9 text-[#1A73E8]" /> */}
                <div className="flex flex-col w-full text-start gap-[11px]  py-2">
                  <h5 className=" text-[1rem] leading-3">Find the cheapest days to fly</h5>
                  <p className="text-wrap">The Date grid and Price graph make it easy to see the best flight deals</p>
                </div>
                <div className="h-[26px] w-[26px] angle border border-primary/70 bg-[#2c323e]/80  absolute rotate-[-135deg] angle  top-1/2 -translate-y-1/2 -right-[13px] z-40  hidden group-data-[state=active]:block"></div>
              </TabsTrigger>
              <TabsTrigger value="See_the_whole_picture" className="min-h-[190.21px] z-10 relative rounded-2xl p-6 pb-8 flex gap-3 items-start !bg-primary/10 max-w-[372.8px] !border-[rgba(138,180,248,0.6)] group">
                <ActivityIcon />
                <div className="flex flex-col w-full text-start gap-3  py-2">
                  <h5 className=" text-[1rem] leading-3">See the whole picture with price insights</h5>
                  <p className="text-wrap">Price history and trend data show you when to book to get the best price on your flight</p>
                </div>
                <div className="h-[26px] w-[26px] bg-[#2c323e]/80 border border-primary/70  absolute rotate-[-135deg] angle  top-1/2 -translate-y-1/2 -right-[13px] z-40 hidden group-data-[state=active]:block"></div>
              </TabsTrigger>
              <TabsTrigger value="track_prices" className="min-h-[190.21px] z-10 relative rounded-2xl p-6 pb-8 flex gap-3 items-start !bg-primary/10 max-w-[372.8px] group !border-[rgba(138,180,248,0.6)]">
                <BellIcon />
                <div className="flex flex-col w-full text-start gap-3  py-2">
                  <h5 className=" text-[1rem] leading-3">Track prices for a trip</h5>
                  <p className="text-wrap">Not ready to book yet? Observe price changes for a route or flight and get notified when prices drop.</p>
                </div>
                <div className="h-[26px] w-[26px] bg-[#2c323e]/80 border border-primary/70  absolute rotate-[-135deg] angle  top-1/2 -translate-y-1/2 -right-[13px] z-40 hidden group-data-[state=active]:block"></div>
              </TabsTrigger>
              {/* <TabsTrigger value="password">Password</TabsTrigger> */}
            </TabsList>
            <TabsContent className="space-y-4 px-0" value="Find_the_cheapest">
              <h3 className="text-2xl pt-3">Insightful tools help you choose your trip dates</h3>
              <p className="text-[.85rem] leading-5 tracking-wide">
                If your travel plans are flexible, use the form above to start searching for a specific trip. Then, play around with the Date grid and Price graph options on the Search page to find the cheapest days to get to your
                destination – and back again for round trips.
              </p>
              {/* <img src={cheapDays} alt="" className="w-full" /> */}
              <div className="bg-[url(../../public/svgs/days.svg)] h-[300px] w-[460px] bg-no-repeat bg-center bg-cover !mt-7"></div>
            </TabsContent>
            <TabsContent value="See_the_whole_picture">
              <h3 className="text-2xl pt-3">Get smart insights about flight prices</h3>
              <p className="text-[.85rem] leading-5 tracking-wide pt-4">
                Real-time insights can tell you if a fare is lower or higher than usual, and if the fare you’re seeing is a good price. So, you don’t have to worry about paying too much for a flight or missing out on the cheapest
                time to book. On some routes, you might also see historical data that helps you better understand how flight prices vary over time.
              </p>
              {/* <img src={cheapDays} alt="" className="w-full" /> */}
              <div className="bg-[url(../../public/svgs/insights.svg)] h-[300px] w-[460px] bg-no-repeat bg-center bg-cover !mt-7"></div>
            </TabsContent>
            <TabsContent value="track_prices">
              <h3 className="text-2xl pt-3">Monitor flight prices and make sure you never miss a price change</h3>
              <p className="text-[.85rem] pt-4 leading-5 tracking-wide">
                Effortlessly track prices for specific travel dates or for any dates, if your plans are flexible, to uncover the best deals. You can easily set up tracking for multiple routes while searching for flights and opt-in
                to receive email updates when the price changes. Once that's done, you can come back to your Tracked Flights page to monitor prices whenever you like, or relax knowing you’ll never miss a flight deal.
              </p>
              {/* <img src={cheapDays} alt="" className="w-full" /> */}
              <div className="bg-[url(../../public/svgs/tracking_prices.svg)] h-[300px] w-[460px] bg-no-repeat bg-center bg-cover !mt-7"></div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      <Accordion type="multiple" className="w-full lg:hidden">
        <AccordionItem value="item-1" className="mb-2 border-b-0">
          <AccordionTrigger className="md:!text-[1rem] !pt-7 !pb-[22px] ps-6 pe-3 lg:pe-1.5 bg-primary/10 data-[state=open]:rounded-b-none">
            <CalendarDaysIcon className="text-[#1A73E8] w-7 h-7 -mt-5" />
            <div className="flex flex-col w-full text-start gap-[11px]">
              <h5 className=" text-[1rem] leading-3">Find the cheapest days to fly</h5>
              <p className="text-wrap">The Date grid and Price graph make it easy to see the best flight deals</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-[1rem] text-foreground/70  px-16 bg-primary/10 data-[state=open]:rounded-b-md">
            <div className="border-t">
              <h3 className="lg:text-2xl text-[1rem] pt-3">Insightful tools help you choose your trip dates</h3>
              <p className="text-[.85rem] leading-5 tracking-wide">
                If your travel plans are flexible, use the form above to start searching for a specific trip. Then, play around with the Date grid and Price graph options on the Search page to find the cheapest days to get to your
                destination – and back again for round trips.
              </p>
              {/* <img src={cheapDays} alt="" className="w-full" /> */}
              <div className="bg-[url(../../public/svgs/days.svg)] h-[150px] sm:max-lg:w-[230px] lg:h-[300px] lg:w-[460px] bg-no-repeat bg-center bg-cover !mt-7"></div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="mb-2 border-b-0">
          <AccordionTrigger className="md:!text-[1rem] !pt-7 lg:py-5 !pb-[22px] ps-6 pe-3 lg:pe-1.5 bg-primary/10 data-[state=open]:rounded-b-none">
            {/* <CalendarDaysIcon className="text-[#1A73E8] w-7 h-7 -mt-5" /> */}
            <ChartSpline className="text-[#1A73E8] self-start h-7 w-7" />
            {/* <CalendarDays className="w-[30px] h-[30px] md:!h-9 md:!w-9 text-[#1A73E8]" /> */}
            <div className="flex flex-col w-full text-start gap-[11px]">
              <h5 className=" text-[1rem] leading-3">See the whole picture with price insights</h5>
              <p className="text-wrap">Price history and trend data show you when to book to get the best price on your flight</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-[1rem] text-foreground/70  px-16 bg-primary/10 data-[state=open]:rounded-b-md">
            <div className="border-t">
              <h3 className="lg:text-2xl text-[1rem] pt-3">Get smart insights about flight prices</h3>
              <p className="text-[.85rem] leading-5 tracking-wide">
                Real-time insights can tell you if a fare is lower or higher than usual, and if the fare you’re seeing is a good price. So, you don’t have to worry about paying too much for a flight or missing out on the cheapest
                time to book. On some routes, you might also see historical data that helps you better understand how flight prices vary over time.
              </p>
              {/* <img src={cheapDays} alt="" className="w-full" /> */}
              <div className="bg-[url(../../public/svgs/insights.svg)] sm:max-lg:w-[230px] h-[150px] lg:h-[300px] lg:w-[460px] bg-no-repeat bg-center bg-cover !mt-7"></div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="mb-2 border-b-0">
          <AccordionTrigger className="md:!text-[1rem] !py-6 lg:!py-5 ps-6 pe-3 lg:pe-1.5 bg-primary/10 data-[state=open]:rounded-b-none">
            {/* <CalendarDaysIcon className="text-[#1A73E8] w-7 h-7 -mt-5" /> */}
            <BellDotIcon className="self-start w-7 h-7 text-[#1A73E8]" />
            {/* <CalendarDays className="w-[30px] h-[30px] md:!h-9 md:!w-9 text-[#1A73E8]" /> */}
            <div className="flex flex-col w-full text-start gap-[11px]">
              <h5 className=" text-[1rem] leading-3">Track prices for a trip</h5>
              <p className="text-wrap">Not ready to book yet? Observe price changes for a route or flight and get notified when prices drop.</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-[1rem] text-foreground/70  px-16 bg-primary/10 data-[state=open]:rounded-b-md">
            <div className="border-t">
              <h3 className="lg:text-2xl text-[1rem] pt-3">Monitor flight prices and make sure you never miss a price change</h3>
              <p className="text-[.85rem] leading-5 tracking-wide">
                Effortlessly track prices for specific travel dates or for any dates, if your plans are flexible, to uncover the best deals. You can easily set up tracking for multiple routes while searching for flights and opt-in
                to receive email updates when the price changes. Once that's done, you can come back to your Tracked Flights page to monitor prices whenever you like, or relax knowing you’ll never miss a flight deal.
              </p>
              {/* <img src={cheapDays} alt="" className="w-full" /> */}
              <div className="bg-[url(../../public/svgs/tracking_prices.svg)] sm:max-lg:w-[230px] h-[150px] lg:h-[300px] lg:w-[460px] bg-no-repeat bg-center bg-cover !mt-7"></div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export { Tools };
