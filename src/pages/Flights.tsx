import { CheapFlights, Destinations, Faqs, FlightsForm, Footer, Hero, PopularRoutes, Tools } from "@/components";

const FlightsPage = () => {
  return (
    <>
      <Hero />
      <div className=" lg:max-w-5xl mx-auto  space-y-3 relative top-[109px] lg:top-[65.1px] lg:py-[29px] ">
        <FlightsForm />
        <CheapFlights />
        <Tools />
        <Destinations />
        <Faqs />
        <PopularRoutes />
        <Footer />
      </div>
      <div className=" h-[140px] lg:h-[65.1px] bg-background"></div>
    </>
  );
};
export { FlightsPage };
