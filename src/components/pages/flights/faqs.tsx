import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I find last-minute flight deals?",
    answer: (
      <>
        Finding last-minute flights is easy on Google Flights.
        <br />
        Select your <b>departure</b> and <b> destination </b> cities in the form on the top of the page, and use the calendar to pick travel dates and find the lowest fares available.
        <br />
        You can even check for flights departing today.
        <br />
        To find the cheapest fares, it’s usually best to book at least a few weeks in advance for domestic flights and a few months in advance for international travel.
      </>
    ),
  },
  {
    question: "How can I find cheap flights for a weekend getaway?",
    answer: (
      <>
        It’s easy to use Google Flights to find deals on weekend getaways or even weeklong trips.
        <br />
        Just enter your <b>departure</b> and <b>destination</b> cities near the top of the page. Then, open the date selector and choose a trip length to see how the round-trip fare changes on different days. Adjust the trip type
        to see one-way fares. The cheapest available flights are highlighted and easy to spot. Once you settle on dates, select <b>Search</b> to see flight options and book the deal.
        <br />
        <br />
        You can also turn on price tracking to get alerts if the price changes for a route or flight.
      </>
    ),
  },
  {
    question: "How can I find flight deals if my travel plans are flexible?",
    answer: (
      <>
        It’s easy to search for flights, even if your plans are up in the air.
        <br />
        1. Tap <b>Explore</b> near the top of the page
        <br />
        2. Then, tap the calendar icon
        <br />
        3. Toggle to <b>Flexible dates</b> and a select a time frame or trip length
        <br />
        4. Tap done
        <br />
        Trip options will appear on the map, with the cheapest available flights highlighted and easy to spot. Tap the destination to see available flight options you can select and book.
        <br />
        <br />
        Price insights and other useful tools can help you find more options that work for your schedule and budget.
      </>
    ),
  },
  {
    question: "How can I find cheap flights to anywhere?",
    answer: (
      <>
        You can find cheap flight deals to anywhere in the world on Google Flights. Just enter your departure city, choose <b>Anywhere</b> as the destination, and select <b>Explore</b>.<br />
        You can pick specific dates or leave departure and return dates blank if your plans are flexible. The cheapest fares to popular destinations will appear.
        <br />
        You can filter the results to see only nonstop flights or flights under a certain price to more easily plan your perfect budget trip.
        <br />
        <br />
        If you already have a destination in mind, you can turn on price tracking to get alerts if the fare changes for a route or flight.
      </>
    ),
  },
];
const Faqs = () => {
  return (
    <div className="space-y-2.5 py-3 lg:py-1 px-4">
      <h3 className="text-[1.25rem] text-light font-semibold md:tracking-[0.0023rem] leading-7">Frequently asked questions</h3>
      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item${index + 1}`} key={faq.question}>
            <AccordionTrigger className="!text-[1rem] pe-2 !py-3">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-[1rem] text-foreground/70  md:max-w-[700px]">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
export { Faqs };
