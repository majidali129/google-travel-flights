import { useMediaQuery } from "@/hooks/use-media-query";
import { Link } from "react-router";

const routes = [
  { label: "Flights from New York to London", href: "/flights/flight-from-new-york-to-london.html" },
  { label: "Flights from New York to Paris", href: "/flights/flight-from-new-york-to-paris.html" },
  { label: "Flights from London to Paris", href: "/flights/flight-from-london-to-paris.html" },
  { label: "Flights from New York to Rome", href: "/flights/flight-from-new-york-to-rome.html" },
  { label: "Flights from Montreal to Paris", href: "/flights/flight-from-montreal-to-paris.html" },
  { label: "Flights from London to Milan", href: "/flights/flight-from-london-to-milan.html" },
  { label: "Flights from Toronto to London", href: "/flights/flight-from-toronto-to-london.html" },
  { label: "Flights from New York to Milan", href: "/flightsflight-from-/new-york-to-milan.html" },
  { label: "Flights from London to Dubai", href: "/flights/flight-from-london-to-dubai.html" },
  { label: "Flights from London to Tokyo", href: "/flights/flight-from-london-to-tokyo.html" },
  { label: "Flights from Madrid to Rome", href: "/flights/flight-from-madrid-to-rome.html" },
  { label: "Flights from London to Delhi", href: "/flights/flight-from-london-to-delhi.html" },
  { label: "Flights from New York to Los Angeles", href: "/flights/flight-from-new-york-to-los-angeles.html" },
  { label: "Flights from Paris to Marrakech", href: "/flights/flight-from-paris-to-marrakech.html" },
  { label: "Flights from Sao Paulo to London", href: "/flights/flight-from-sao-paulo-to-london.html" },
  { label: "Flights from London to Istanbul", href: "/flights/flight-from-london-to-istanbul.html" },
  { label: "Flights from Paris to Bangkok", href: "/flights/flight-from-paris-to-bangkok.html" },
  { label: "Flights from New York to Orlando", href: "/flights/flight-from-new-york-to-orlando.html" },
  { label: "Flights from London to Berlin", href: "/flights/flight-from-london-to-berlin.html" },
  { label: "Flights from Chicago to Paris", href: "/flights/flight-from-chicago-to-paris.html" },
  { label: "Flights from Melbourne to London", href: "/flights/flight-from-melbourne-to-london.html" },
];

const PopularRoutes = () => {
  const { isLargeScreen } = useMediaQuery();
  return (
    <div className=" px-4">
      <div className="space-y-2">
        <h3 className="text-[1.25rem] pt-3.5 pb-1 text-light font-semibold md:tracking-[0.0023rem] leading-7">Find cheap flights on popular routes</h3>
        <ul className="grid lg:grid-cols-3 gap-y-2.5">
          {(isLargeScreen ? routes : routes.slice(0, 12)).map((route) => (
            <Link to={route.href} key={route.href} className="text-primary text-[.88rem]">
              {route.label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export { PopularRoutes };
