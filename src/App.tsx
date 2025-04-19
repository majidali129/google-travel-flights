import { useState } from "react";
import { CheapFlights } from "./components/cheap-flights";
import { Destinations } from "./components/destinations";
import { Faqs } from "./components/faqs";
import { FlightsForm } from "./components/flights-form";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { PopularRoutes } from "./components/popular-routes";
import { Sidebar } from "./components/sedebar";
import { Tools } from "./components/tools";
import { useClickOutside } from "./hooks/use-click-outside";
import { useToggleSidebar } from "./hooks/use-toggle-sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(false);
  };

  const sidebarRef = useClickOutside(toggleSidebar, false);
  useToggleSidebar(isOpen, setIsOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} ref={sidebarRef} />
      <Header setIsOpen={setIsOpen} />
      <Hero />
      <div className=" lg:max-w-5xl mx-auto  space-y-3 relative top-[170px] lg:top-[65.1px] lg:py-[29px] ">
        <FlightsForm />
        <CheapFlights />
        <Tools />
        <Destinations />
        <Faqs />
        <PopularRoutes />
        <Footer />
      </div>
      <div className=" h-[170px] lg:h-[65.1px] bg-background"></div>
    </>
  );
};
export default App;
