const Hero = () => {
  return (
    <div className=" h-[135px]  lg:h-[297px] relative top-[calc(65.1px+40px)] lg:top-[65.1px]">
      <div className="h-full m-[0_auto_40px] max-w-[1248px] bg-[url(../../../svgs/flight_hero.svg)] bg-no-repeat bg-cover bg-center lg:bg-[49.8%_50%]">
        <h3 className="absolute -bottom-2.5 lg:bottom-1  left-0 right-0 text-center w-full text-foreground text-[2.35rem] md:text-[57px] ">Flights</h3>
      </div>
    </div>
  );
};
export { Hero };
