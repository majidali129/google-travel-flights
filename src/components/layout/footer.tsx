import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, MapPin, ReceiptIndianRupee } from "lucide-react";
import { Link } from "react-router";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <footer className="w-full text-sm pt-4 lg:px-4">
      <div className="space-y-5">
        <Separator className="bg-foreground/50 mt-2" />

        <div className="flex flex-wrap justify-center gap-3 py-0 lg:py-1">
          <button className="flex items-center gap-2 px-[10px_11px] h-[32px] rounded-full border border-gray-700 hover:bg-primary/2 transition-colors text-primary text-[.9rem] font-semibold">
            <Globe className="w-4 h-4" />
            <span>Language · English (United States)</span>
          </button>

          <button className="flex items-center gap-2 px-[10px_11px] h-[32px] rounded-full border border-gray-700 hover:bg-primary/2 transition-colors text-primary text-[.9rem] font-semibold">
            <MapPin className="w-4 h-4" />
            <span>Location · Pakistan</span>
          </button>

          <button className="flex items-center gap-2 px-[10px_11px] h-[32px] rounded-full border border-gray-700 hover:bg-primary/2 transition-colors text-primary text-[.9rem] font-semibold">
            <ReceiptIndianRupee className="w-4 h-4" />
            <span>Currency · PKR</span>
          </button>
        </div>

        <div className="text-center text-muted-foreground">
          <p className="mb-1">Current language and currency options applied: English (United States) - Pakistan - PKR</p>
          <p>
            Displayed currencies may differ from the currencies used to purchase flights.
            <Link to="#" className="text-primary px-2 hover:underline">
              Learn more
            </Link>
          </p>
        </div>

        <div className="text-[.875rem] text-muted-foreground px-4 lg:px-3 leading-relaxed mb-3 text-center lg:text-start">
          <p>
            Prices are final prices and include all taxes and fees, including payment fees for the cheapest common payment method (which may differ depending on the provider). Additional charges may apply for other types of
            payment, luggage, meals, WLAN or other additional services. Prices, availability and travel details are provided based on the latest information received from our partners. This information is reflected in the results
            within a period of less than 24 hours. Additional conditions may also be applied by our partners. You should then check prices and conditions with the services providers before booking.
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 lg:gap-y-2 py-6 max-lg:px-4">
        <Link to="#" className=" transition-colors text-primary hover:underline">
          About
        </Link>
        <Link to="#" className=" transition-colors text-primary hover:underline">
          Privacy
        </Link>
        <Link to="#" className=" transition-colors text-primary hover:underline">
          Terms
        </Link>
        <Link to="#" className=" transition-colors text-primary hover:underline">
          Join user studies
        </Link>
        <Link to="#" className=" transition-colors text-primary hover:underline">
          Feedback
        </Link>
        <Link to="#" className=" transition-colors text-primary hover:underline">
          Help Center
        </Link>
      </div>

      <Separator className="my-2" />

      <div className="flex flex-col gap-y-[12px] lg:flex-row justify-center lg:gap-x-8 py-3 max-md:pb-0 lg:pt-7">
        <Select>
          <SelectTrigger className="border-0  !text-primary text-[14px] !bg-background !outline-0 !ring-0">
            <SelectValue placeholder="International sites" />
          </SelectTrigger>
          <SelectContent className="!bg-background">
            <SelectItem value="United States">
              <Link to="#" className="text-primary">
                United States
              </Link>
            </SelectItem>
            <SelectItem value="United Kingdom">
              <Link to="#" className="text-primary">
                United Kingdom
              </Link>
            </SelectItem>
            <SelectItem value="Canada">
              <Link to="#" className="text-primary">
                Canada
              </Link>
            </SelectItem>
            <SelectItem value="Australia">
              <Link to="#" className="text-primary">
                Australia
              </Link>
            </SelectItem>
            <SelectItem value="India">
              <Link to="#" className="text-primary">
                India
              </Link>
            </SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="border-0  !text-primary text-[14px] !bg-background !outline-0 !ring-0">
            <SelectValue placeholder="Explore flights" />
          </SelectTrigger>
          <SelectContent className="!bg-background">
            <SelectItem value="Domestic Flights">
              <Link to="#" className="">
                Domestic Flights
              </Link>
            </SelectItem>
            <SelectItem value="International Flights">
              <Link to="#" className="">
                International Flights
              </Link>
            </SelectItem>
            <SelectItem value="Last Minute Deals">
              <Link to="#" className="">
                Last Minute Deals
              </Link>
            </SelectItem>
            <SelectItem value="Flight + Hotel">
              <Link to="#" className="">
                Flight + Hotel
              </Link>
            </SelectItem>
            <SelectItem value="Flight + Status">
              <Link to="#" className="">
                Flight + Status
              </Link>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </footer>
  );
};
