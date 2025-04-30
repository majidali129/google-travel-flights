import islamabad from "@/assets/images/islamabad.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import islamabad from ''

const Destinations = () => {
  return (
    <div className=" pt-5  lg:py-2.5 px-4">
      <div className="space-y-3">
        <h3 className="text-[1.25rem] text-light font-semibold md:tracking-[0.0023rem] leading-7">Popular destinations from Faisalabad</h3>
        <div className="w-full">
          <Carousel orientation="horizontal" className="w-full">
            <CarouselContent className="gap-2.5 w-full hide-scroll py-1 snap-x snap-mandatory">
              {Array.from({ length: 20 }).map((_, index) => (
                <CarouselItem key={index} className="basis-[132px] snap-start ">
                  <CityItem />
                </CarouselItem>
              ))}
              <CarouselItem className="basis-[132px] snap-start ">
                <CityItem />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-3 !bg-[#292b2e] border-0 cursor-pointer" />
            <CarouselNext className="-right-4 md:-right-3 !bg-[#292b2e] border-0 cursor-pointer" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export { Destinations };

function CityItem() {
  return (
    <div className="city select-none">
      <img src={islamabad} alt="" className="h-full rounded-[8px] object-center w-[132px] " />
      <span className="absolute bottom-0 font-[500] p-[6.5px] text-[1rem]">Islamabad</span>
    </div>
  );
}
