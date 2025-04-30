import { useState } from "react";
import { Header } from "./components";
import { Sidebar } from "./components/layout/sidebar";
import { useClickOutside, useToggleSidebar } from "./hooks";
import { FlightsPage } from "./pages";

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
      <FlightsPage />
    </>
  );
};
export default App;
